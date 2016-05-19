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
		List<Scores> scores = em.createQuery("Select s from Scores order by scores", Scores.class ).setMaxResults(pageSize).getResultList(); 
		return scores; 
	}
	
	@Override 
	public void postScore(Scores s, String name, int score) { 
		s.setName(name);
		s.setScore(score);
		em.persist(s);
		
	}

}
