Ext.define('Playground.view.winamp.playlist.Playlist', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.bnz-winamp-playlist',

  requires: [
    'Ext.grid.Panel',
    'Ext.data.Store',
    'Ext.grid.plugin.DragDrop'
  ],

  title: 'WINAMP PLAYLIST',
  border: 1,
  reference: 'winamp-playlist',
  layout: {
    type: 'fit'
  },
  store: undefined,

  viewConfig: {
    plugins: {
      ptype: 'gridviewdragdrop',
      dragText: 'Drag and drop to reorganize'
    }
  },

  columns: [{
    xtype: 'rownumberer'
  }, {
    dataIndex: 'title',
    flex: 1
  }, {
    dataIndex: 'duration',
    renderer: function(value, meta, record) {
      var millis = value;
      var hours = Math.floor(millis / 36e5),
        mins = Math.floor((millis % 36e5) / 6e4),
        secs = Math.floor((millis % 6e4) / 1000);
      value = hours + ':' + mins + ':' + secs;
      return value;
    }
  }],

  bbar: [{
    text: 'ADD'
  }, {
    text: 'REM'
  }, {
    text: 'SEL'
  }, {
    text: 'MISC'
  }],

  initComponent: function() {

    this.store = Ext.create('Ext.data.Store', {
      storeId: 'playList',
      fields: ['id', 'title', 'user', 'duration']
    });
    this.callParent();
  }
});
