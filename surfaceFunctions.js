function overlap(surfaceA, surfaceB){				//Tests whether two surfaces are overlapping.. returns boolean
	if((surfaceA[2] >= surfaceB[0])&&
		(surfaceA[2] <= (surfaceB[2] + surfaceA[2] - surfaceA[0]))&&
		(surfaceA[3] <= surfaceB[5])&&
		(surfaceA[3] >= (surfaceB[1] + surfaceA[3] - surfaceA[5]))){
			return true;
		}
		else {return false;}
}