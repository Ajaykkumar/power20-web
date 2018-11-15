
// import Axios from 'axios';
import * as React from 'react';
// import { Button } from 'react-bootstrap';
// import { Plus as PlusIcon } from 'react-feather';
// import EditGridModal from '../../components/DataGrid/EditGridModal';

// import { Button } from 'react-bootstrap/lib/InputGroup';
import trash from '../../assets/img/delete.svg';
import edit from '../../assets/img/edit.svg';
import json from '../../assets/img/json.svg';
import './workouts.css';

interface IReactFormState {
  data: object[];
  // fieldValues: object;
  openModal: boolean;
  isEdit: boolean;
  schema: any;
}

class Workouts extends React.PureComponent<IReactFormState> {
  public state: IReactFormState;

  constructor(props: any) {
    super(props);
    this.state = {
      data: [{'name': '1', 'status': 'Live', 'simulator': 'preview' }, {'name': '2', 'status': 'Live', 'simulator': 'preview' }],
      // fieldValues: {},
      isEdit: false,
      openModal: false,
      schema: []
    };
  }

  // public componentDidMount() {
  //   Axios.get('http://demo7355785.mockable.io//qwerty1').then(
  //     (response: any) => {
  //       this.setState({
  //         schema: response.data.components[1].components[0].components
  //       });
  //     }).catch((e: any) => {
  //       // tslint:disable-next-line:no-console
  //       console.log(e);
  //     });
  // }


  // public addNew = (values: any) => {
  //   this.setState({
  //     isEdit: false,
  //     openModal: true
  //   });
  // }

  // public toggleModal = () => (
  //   this.setState((previousState: IReactFormState) => ({ openModal: !previousState.openModal }))
  // )

  public render() {
    // const { data, fieldValues, isEdit, openModal, schema } = this.state;
    const { data } = this.state;
    return (
        <div className="salesForm container-fluid">
          <div className="panel panel-default col-md-4 mt-10 p-0 mr-5">
              <div className="panel-heading">
              <h4>Workouts</h4></div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>STAGE NAME</th>
                    <th>NO. OF WORKOUTS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? data.map((item: any) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.batchNo}</td>
                      <td>
                      <div className="center">
                          <img className="action" src={edit} />
                          <img className="action" src={trash} />
                        </div>
                      </td>
                    </tr>
                  )) : <tr>
                      <td colSpan={24} className="noDataFound"><div>No data available</div></td>
                    </tr>}
                </tbody>
              </table>
          </div>

          <div className="panel panel-default col-md-7 mt-10 p-0">
                  <div className="panel-heading">
                    <h4>Conceiving workouts
                    <span className="float-right">
                      <button className="btn btn-default green">
                        +Create workout
                      </button>
                    </span>
                    </h4>
                  </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>WORKOUTS</th>
                    <th>STATUS</th>
                    <th>SIMULATOR</th>
                    <th>ACTIONS</th>
                    <th>UNPUBLISH</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? data.map((item: any) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.simulator}</td>
                      <td>
                        <div className="center">
                          <img className="action" src={json} />
                          <img className="action" src={edit} />
                          <img className="action" src={trash} />
                        </div>
                      </td>
                      <td><button className="btn btn-default">UnPublish</button></td>
                    </tr>
                  )) : <tr>
                      <td colSpan={24} className="noDataFound"><div>No data available</div></td>
                    </tr>}
                </tbody>
              </table>
            </div>
        </div>
    );
  }
}

// const mapStateToProps = (state: IState) => ({
//   loading: state.user.loading,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchUsers: () => dispatch(fetchUsers())
// });

// interface IStateProps {
//   salesBill: any[];
//   loading: boolean;
// }

// interface IDispatchProps {
//   fetchUsers: () => void;
// }

// export default compose(
//   withRouter,
//   connect<IStateProps, IDispatchProps>(
//     mapDispatchToProps
//   ),
//   withLocalize
// )(Workouts);

export default Workouts;
