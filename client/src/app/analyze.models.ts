export class AnalyzeModel {
	cozy: {
		data: Object[],
		meta: {
			count: number,
			first: number,
			last: number,
			max: number,
			mean: number,
			median: number,
			min: number,
			stddev: number,
			sum: number
		}
	}
	engine: {
		data: Object[],
		meta: {
			count: number,
			first: number,
			last: number,
			max: number,
			mean: number,
			median: number,
			min: number,
			stddev: number,
			sum: number
		}
	}  
};

export class AnalyzeOptions {
	field: string
	metakey: string
	group: string	
	period: { 
		start:Number, 
		end:Number 
	};
};