import * as _ from "lodash"

type JobId = number

interface Job {
	time: number
	action: () => void
}

export default class Index {
	public tasks: Record<JobId, Job>

	public name: number

	constructor() {
		this.tasks = []
		this.name = new Date().getTime()
	}

	createTask(job: Job): JobId {
		const time: JobId = new Date().getTime()

		this.tasks[time] = job
		return time
	}

	getTask(jobId: JobId): Job {
		return this.tasks[jobId]
	}
}
