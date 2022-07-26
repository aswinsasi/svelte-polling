<script>
    import PollStore from '../store/PollStore';
    import Card from '../shared/Card.svelte';
    import { createEventDispatcher } from 'svelte';
    import Button from '../shared/Button.svelte';
    import { tweened } from 'svelte/motion';
    export let poll={};

    let dispatch = createEventDispatcher();
    //reactive value
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100/totalVotes * poll.votesA) || 0;
    $: percentB = Math.floor(100/totalVotes * poll.votesB) || 0;

    //tweened percentage
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    const handleVote = (option, id) => {
        PollStore.update(currentPoll => {
            let copiedPolls = [...currentPoll];
            
            const upVotedPoll = copiedPolls.find((poll) => poll.id === id );
            
            if(option == 'a')
            {
                upVotedPoll.votesA++;
            }else{
                upVotedPoll.votesB++;
            }

            return copiedPolls;
        });
       // dispatch('vote', { option, id});
    };

    const handleDelete = (id) => {
      PollStore.update(currentPoll => currentPoll.filter((poll) => poll.id != id ));
    };

</script>

<Card>

<div class="poll" slot="card">
    <h3>{poll.question}</h3>
    <p>Total Votes: {totalVotes}</p>
    <!-- ()=> dispatch('vote', {option:'a', id: poll.id}) we can use like this also but for long its bit confuse -->
    <div class="answer" on:click={()=> handleVote('a', poll.id)}>
    <div class="percent percent-a" style="width:{$tweenedA}%"></div>
        <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={()=> handleVote('b', poll.id)}>
        <div class="percent percent-b" style="width:{$tweenedB}%"></div>
        <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <!-- Delete name as specified as slot -->
      <Button flat={true} on:click={()=> handleDelete(poll.id)}>Delete</Button>
    </div>
</div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    width:25%;
    background: rgba(217, 27, 66, 0.2);
    border-left: 4px solid #d91b42;
  }
  .percent-b {
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
  }
  .delete{
    margin-top: 30px;
    text-align: center;
  }
</style>