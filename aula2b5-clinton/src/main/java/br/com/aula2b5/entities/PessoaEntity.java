package br.com.aula2b5.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "pessoa")
public class PessoaEntity {

    @Id
    @Column(name = "idpessoa", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nomepessoa")
    private String nome;

    @Column(name = "idadepessoa")
    private Integer idade;

    @Column(name = "emailpessoa")
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idendereco", referencedColumnName = "idendereco")
    @JsonManagedReference // Source: https://stackoverflow.com/questions/47693110/could-not-write-json-infinite-recursion-stackoverflowerror-nested-exception
    private EnderecoEntity endereco;
}
