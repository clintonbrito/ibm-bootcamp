package br.com.aula2b5.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "endereco")
public class EnderecoEntity {

    @Id
    @Column(name = "idendereco", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nomerua;

    @Column(nullable = false)
    private short numero;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String cidade;

    @Column(nullable = false)
    private String estado;

    @OneToOne(mappedBy = "endereco")
    private PessoaEntity pessoa;
}
