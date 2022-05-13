package com.mvp.server.Trainer;

import com.mvp.server.Pokemon.Pokemon;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trainers")
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String trainerName;

    @ManyToMany(mappedBy = "trainers")
    private List<Pokemon> pokemon = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getTrainerName() {
        return trainerName;
    }

    public void setTrainerName(String trainerName) {
        this.trainerName = trainerName;
    }

    public List<Pokemon> getPokemon() {
        return pokemon;
    }

    public void setPokemon(List<Pokemon> pokemon) {
        this.pokemon = pokemon;
    }

    @Override
    public String toString() {
        return "Trainer{" +
                "id=" + id +
                ", trainerName='" + trainerName + '\'' +
                ", pokemon=" + pokemon +
                '}';
    }
}