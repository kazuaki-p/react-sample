import React from 'react';
import {Table, Column} from 'react-virtualized';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

import 'react-virtualized/styles.css'

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state= {
      data:[],
    }

  }

  componentWillMount() {

    const data = new Array(100000).fill({}).map(( _, i) => ({no: i, tittle: `title ${i}`}));

    data.shift();

    this.setState({data});

  }


  render() {

    const {data} = this.state;

    return (
      <AutoSizer>
        {({width, height}) => (
          <Table rowCount={data.length}
                 rowGetter={({index}) => data[index]}
                 rowHeight={30}
                 width={width}
                 height={500} headerHeight={30}>
            <Column dataKey={'no'}
                    label={'No'}
                    width={60}
                    height={30} />
            <Column dataKey={'tittle'}
                    label={'タイトル'}
                    width={120}
                    height={30} />
            <Column label={'編集'}
                    cellRenderer={({rowData}) => <a href="#">{JSON.stringify(rowData)}</a> }
                    flexGrow={1}
                    height={30} />
          </Table>)}
      </AutoSizer>
    );
  }

}

export default App;
