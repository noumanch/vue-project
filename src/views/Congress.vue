<template>

 <div class="congress">
   <table id="table">
    <div v-show="loading" id="loader">
     <div class = "blob-1"></div>
      <div class = "blob-2"></div>
  </div>
  <h1>Congressmen</h1>
  <p>The major power of the House is to pass federal legislation that affects the entire country, although its bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law (unless both the House and Senate
    re-pass the legislation with a two-thirds majority in each chamber). The House has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached officials are subsequently tried in the Senate), and to elect the U.S.
    President in case there is no majority in the Electoral College.Each U.S. state is represented in the House in proportion to its population as measured in the census, but every state is entitled to at least one representative.
  </p>


  <div class="">
    <table class="table is-fullwidth">
      <th>Name</th>
      <th>Party</th>
      <th>State</th>
      <th>Votes</th>
      <tbody>
        <tr v-for="(politicians, key) in membersData">
          <td>{{politicians.first_name}} {{politicians.second_name}} {{politicians.last_name}}</td>
          <td>{{politicians.party}}</td>
          <td>{{politicians.state}}</td>
          <td>{{politicians.votes_with_party_pct}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </table>
  <footer>
    <pre>2016TGIF ! all rights reserved</pre>
  </footer>
</div>


</template>

<script type="text/javascript">
export default {
  data() {
    return {
      membersData: [],
      loading: true,
    }
  },
  created() {
    fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
        methods: "GET",
        headers: {
          "X-API-Key": "bAqn1X046lSmGQ4qxi9mEmdnHo9scMqpBy7mYq7F"
        }
      })
      .then(function(data) {
        return data.json()
      })
      .then(myData => {
        this.membersData = myData.results[0].members;
        this.loading = false;
        console.log(myData)
      })
  }


}
</script>
