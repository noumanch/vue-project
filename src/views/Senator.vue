<template>

  <div class="home">
    <table id="table">
    <div v-show="loading" id="loader">
      <div class = "blob-1"></div>
       <div class = "blob-2"></div>
    </div>
    <div>
      <h1>Senators</h1>
      <p>First convened in 1789, the composition and powers of the Senate
        are established in Article One of the U.S. Constitution. Each state is represented by
        two senators, regardless of population, who serve staggered six-year terms.
        The Senate has several exclusive powers not granted to the House, including
        consenting to treaties as a precondition to their ratification and consenting to or
        confirming appointments of Cabinet secretaries, federal judges, other federal
        executive officials, military officers, regulatory officials, ambassadors, and other federal uniformed
        officers, as well as trial of federal officials impeached by the House.
      </p>

        <div>
          <table class="table is-fullwidth">
            <th>Name</th>
            <th>Party</th>
            <th>State</th>
            <th>Vote/</th>
            <tbody>
              <tr v-for="(politicians, key) in politicians">
                <td>{{politicians.first_name}} {{politicians.second_name}} {{politicians.last_name}}</td>
                <td>{{politicians.party}}</td>
                <td>{{politicians.state}}</td>
                <td>{{politicians.votes_with_party_pct}}</td>

              </tr>
            </tbody>
          </table>
        </div>
    </div>
    </table>
    <footer>
      <pre class="text-center col-sm-12">2016TGIF ! all rights reserved</pre>
    </footer>
  </div>


</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data(){
      return{
        loading: true,
        politicians:[],
      }
    },
  created(){
    fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
            methods: "GET",
            headers: new Headers({
                "X-API-Key": "bAqn1X046lSmGQ4qxi9mEmdnHo9scMqpBy7mYq7F"
            })
        })
        .then(function(data){
          return data.json()
        })
        .then(myData =>{
          this.politicians = myData.results[0].members;
          this.loading = false;
          console.log(myData)
        })
  }
}

// function createtable(data){
// var getDiv = document.getElementById('id');
// var table = document.createElement('table');
// var createTh = document.createElement('th');
// var firstName = 'data.members.first_name'
// createTh.innerHTML = FirstName;
// getdiv.append(table);
// data.forEach(eachitem => {})
//
// }
//
//
// }

</script>
<style media="screen">

</style>
