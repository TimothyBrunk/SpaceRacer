package Data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

import Entities.Scores;

@Transactional
public class SpaceRacerDataDAO implements SpaceRacerDAO {
	@PersistenceContext
	private EntityManager em; 

	@Override
	public List<Scores> getAllScores() {
		int pageSize = 10; 
		List<Scores> scores = em.createQuery("Select s from Scores s order by scores desc", Scores.class ).setMaxResults(pageSize).getResultList(); 
		System.out.println(scores);
		System.out.println("In DAO");
		return scores; 
	}
	
	@Override 
	public void postScore(Scores s, String name, int score) { 
		System.out.println("In DAO");
		s.setName(name);
		s.setScore(score);
		em.persist(s);
		
	}

}
