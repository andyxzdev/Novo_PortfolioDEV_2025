package com.andy.apicontato.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.andy.apicontato.dto.ContatoDTO;


@RestController
@RequestMapping("/api/contato") // permite o acesso do React
public class ContatoController {

    @PostMapping
    public ResponseEntity<String> receberFormulario(@RequestBody ContatoDTO contato) {
        System.out.println("Recebido:");
        System.out.println("Nome: " + contato.getNome());
        System.out.println("Tipo de Projeto: " + contato.getTipoProjeto());
        System.out.println("WhatsApp: " + contato.getWhatsapp());
        System.out.println("Mensagem: " + contato.getMensagem());

        return ResponseEntity.ok("Formulário recebido com sucesso!");
    }
}
