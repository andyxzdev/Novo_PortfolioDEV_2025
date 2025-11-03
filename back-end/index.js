import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.post("/api/contato", async (req, res) => {
  const data = req.body;

  if (!data || !data.nome || !data.tipoProjeto || !data.mensagem) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Formulário de Contato" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Novo contato via formulário",
      text: `
Nome: ${data.nome}
Projeto: ${data.tipoProjeto}
Whatsapp: ${data.whatsapp}
Mensagem:
${data.mensagem}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Mensagem enviada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao enviar email" });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
}

export default app;
