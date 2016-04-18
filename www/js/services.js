angular.module('starter.services', [])

.factory('Tickets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tickets = [];

  return {
    all: function() {
      return tickets;
    },
    add: function(ticket) {
      tickets.push(ticket);
    },
    remove: function(ticket) {
      tickets.splice(tickets.indexOf(ticket), 1);
    },
    get: function(ticketId) {
      for (var i = 0; i < tickets.length; i++) {
        if (tickets[i].id === parseInt(ticketId)) {
          return tickets[i];
        }
      }
      return null;
    }
  };
});
