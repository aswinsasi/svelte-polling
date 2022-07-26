<script>
    import PollStore from '../store/PollStore';
    import Button from '../shared/Button.svelte';
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();

    let fields = { question: '', answerA: '', answerB: ''};
    //validation
    let valid= false;
    let errors = { question: '', answerA: '', answerB: ''};
    const submitForm = () => {
        valid = true;
        //validate question
        if(fields.question.trim().length < 5)
        {
            valid = false;
            errors.question = 'Question must be 5 character long';
        }else{
            errors.question = '';
        }

        //validate answer A
        if(fields.answerA.trim().length < 1)
        {
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        }else{
            errors.answerA = '';
        }

        //validate answer B
        if(fields.answerB.trim().length < 1)
        {
            valid = false;
            errors.answerB = 'Answer B cannot be empty';
        }else{
            errors.answerB = '';
        }

        if(valid)
        {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()};
            //save poll to store
            PollStore.update((currentPoll) => {
                return [poll, ...currentPoll];
            })
          //  dispatch('add',poll);
          dispatch('add');
        }
    };
</script>

<form on:submit|preventDefault="{submitForm}">
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value="{fields.question}">
        <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value="{fields.answerA}">
        <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value="{fields.answerB}">
        <div class="error">{errors.answerB}</div>
    </div>
    <!-- its shared button  -->
    <Button type='secondary' flat={false} inverse={true}><span>Add Poll</span></Button>
</form>

<style>
    form {
        width: 400px;
        margin:0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input{
        width: 100%;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
    .error{
        font-weight: bold;
        color:crimson;
        font-size: 12px;
    }
</style>