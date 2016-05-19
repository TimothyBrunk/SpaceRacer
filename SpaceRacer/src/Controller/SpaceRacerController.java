package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Data.SpaceRacerDAO;
import Entities.Scores;

@RestController
public class SpaceRacerController {
	
	@Autowired
	private SpaceRacerDAO spaceracerdao; 
	
	@RequestMapping("ping")
	public String ping() {
		return "pong";

	}
	
	@RequestMapping("scores")
	public List<Scores> getScores() {
		System.out.println("In Get Scores");
		return spaceracerdao.getAllScores();  
	}
	@RequestMapping(value = "scores", method=RequestMethod.POST) 
	public void addScore(@RequestBody Scores s) { 
		
	}
	
} 