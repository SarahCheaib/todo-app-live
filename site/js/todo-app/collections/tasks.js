define([
    'underscore',
    'backbone',
    'app/models/task'
], function (_, Backbone, TaskModel) {
    var Tasks = Backbone.Collection.extend({
        model: TaskModel,
        url: '/api/tasks',
        doneURL: '/api/doneTasks',
        destroyDoneTasks: function () {
            var _this = this;

            //we want to destroy all done tasks and do this server-side with mongoose
            //do ajax call to deleteDoneURL, which will invoke the deletion of all done tasks in the NoSQL database
            $.ajax({
                url: _this.doneURL,
                type: 'DELETE',
                success: function( data ) {
                    console.log( 'Delete response:' );
                    console.dir( data );
                    _this.trigger('destroyedDoneComplete');  //trigger custom event
                },
                error: function( data ) {
                    console.log( 'Delete response:' );
                    console.dir( data );
                    _this.trigger('destroyedDoneComplete');  //trigger custom event
                }
            });
            return false;
        }
    });
    return Tasks;
});