package Data;

import java.util.List;

import Entities.Scores;

public interface SpaceRacerDAO {
	
	public List<Scores> getAllScores(); 
	
	public void postScore(Scores s, String name, int score); 

}
