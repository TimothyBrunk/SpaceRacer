package Entities;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;



@Entity
public class Scores {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id; 
	private String name; 
	private int score;
	
	
	
	public Scores() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Scores(int id, String name, int score) {
		super();
		this.id = id;
		this.name = name;
		this.score = score;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getScore() {
		return score;
	}



	public void setScore(int score) {
		this.score = score;
	}



	@Override
	public String toString() {
		return "Scores [id=" + id + ", name=" + name + ", score=" + score + "]";
	} 
	
	
	
	
	

}
