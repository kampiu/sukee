type JobId = number

interface Job {
	time: number
	action: () => void
}

export default class Core {
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
}
