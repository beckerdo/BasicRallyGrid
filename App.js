Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	
	// Launch this app
    launch: function() {
        //Write app code here
        console.log( "Ext JS Rally Story app" );
		this._loadData();
	},
        
	// Get data from Rally
	_loadData: function () {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
					console.log( 'Got data!', myStore, myData, success );
					this._loadGrid( myStore );
				},
				scope: this // at time of scope creation, this refers to Rally.app.App
			},
			fetch: ['FormattedID', 'Name', 'ScheduleState']
		});
    },
	
	// Create and show a Grid of from given store.
	_loadGrid: function( myStoryStore ) {
		var myGrid = Ext.create( 'Rally.ui.grid.Grid', {
			store: myStore,
            columnCfgs: [
                'FormattedID','Name','ScheduleState'
            ]
		});
		console.log( 'My Grid=', myGrid );
		console.log( 'this=', this );
		this.add( myGrid );
	}
});