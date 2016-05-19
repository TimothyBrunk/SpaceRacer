package Test;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import Entities.Scores;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("frockoverflowdb");
		EntityManager em = emf.createEntityManager();
		
		EntityTransaction et = em.getTransaction();
		et.begin();
		Scores s = em.createQuery("SELECT s from Scores s WHERE id = '1'", Scores.class).getSingleResult();
		System.out.println(s.getId()+ "");
	
//		et.commit();
//	
//		em.persist(q);
		em.getTransaction().commit();
		
		
		em.close();
		emf.close();
	}

}