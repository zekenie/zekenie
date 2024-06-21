class Milestone {
    constructor(name, date, duration) {
        this.name = name;
        this.date = date;
        this.duration = duration;
        this.type = 'milestone';
    }
}

class Span {
    constructor(name, startDate, endDate) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = 'span';
    }
}

class Section {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    add(task) {
        this.tasks.push(task);
        return this;
    }
}

export class MermaidGanttChart {
    constructor(title) {
        this.title = title;
        this.sections = [];
    }

    section(sectionName) {
        let section = this.sections.find(sec => sec.name === sectionName);
        if (!section) {
            section = new Section(sectionName);
            this.sections.push(section);
        }
        return section;
    }
}

// Helper functions
export function milestone(name, date, duration = '0d') {
    return new Milestone(name, date, duration);
}

export function span(name, startDate, endDate) {
    return new Span(name, startDate, endDate);
}