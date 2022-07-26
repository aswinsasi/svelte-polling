import { writable } from 'svelte/store';


const PollStore = writable([{
    id: 1,
    question: 'Pyhton or Javascript',
    answerA: 'Python',
    answerB: 'Javascript',
    votesA: 8,
    votesB: 7
}]);


export default PollStore;