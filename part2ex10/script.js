const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        return `Мне ${plan.age} и я владею языками: ` +
            `${plan.skills.languages.join(' ').toUpperCase()}`;
    }

};

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    if (Object.keys(plan.skills.programmingLangs).length === 0) {
        return '';
    }
    let result = '';
    for (let key in plan.skills.programmingLangs) {
        result += `Язык ${key} изучен на ` +
            `${plan.skills.programmingLangs[key]}\n`;
    }
    return result;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));