<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tab from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';
	import AddPersonForm from '../../myproject/src/AddPersonForm.svelte';
	// import { tweened } from 'svelte/motion';

	// const value = tweened(0);

	//tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem= "Current Polls";
	const tabChange=(e) => {
		activeItem= e.detail;
	};


	const handleAdd = (e) => {
		// const poll = e.detail;
		// let polls = [poll, ...polls];

		activeItem= 'Current Polls';
	};

	const handleVote = (e) => {
		// const {id, option} = e.detail;

		// let copiedPolls = [...polls];
		
		// const upVotedPoll = polls.find((poll) => poll.id === id );
		
		// if(option == 'a')
		// {
		// 	upVotedPoll.votesA++;
		// }else{
		// 	upVotedPoll.votesB++;
		// }

		// polls = [...copiedPolls];
	};
</script>
<!-- <button on:click="{()=> value.set(1)}">{$value}</button> -->
<Header/>
	<main>
		<!-- we can use as {single} or single={single} if variaable name different in component use second way -->
		<Tab items={items} {activeItem} on:tabChange="{tabChange}"/>
		{#if activeItem === 'Current Polls'}
			<PollList  on:vote={handleVote}/>
		{:else if activeItem === 'Add New Poll'}
			<CreatePollForm on:add={handleAdd}/>
		{/if}
	</main>
<Footer/>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>