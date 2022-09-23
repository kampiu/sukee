type JobId = number

interface Job {
	time: number
	action: () => void
}

export default class Index {
	public tasks: Record<JobId, Job>

	constructor() {
		this.tasks = []
	}

	createTask(job: Job): JobId {
		const time: JobId = new Date().getTime()

		this.tasks[time] = job
		return time
	}

	getTask(jobId: JobId): Job{
		return this.tasks[jobId]
	}

	static getName(): string {
		return "demo"
	}
}
