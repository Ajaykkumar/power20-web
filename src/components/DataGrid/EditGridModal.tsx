import * as React from 'react';
import { Modal } from 'react-bootstrap';
import FormField from './FormField';

interface IEditGridModalProps {
  handleClose: () => void;
  schema: any;
  show: boolean;
  isEdit: boolean;
  initialValues: object;
}

class EditGridModal extends React.Component<IEditGridModalProps, {}> {
  public constructor(props: IEditGridModalProps) {
    super(props);
  }

  public render() {
    const { handleClose, show, isEdit, initialValues } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton={true}>
          <Modal.Title className="modal-header-div">{isEdit ? 'Edit' : 'Create'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {this.props.schema.map((element: any) => (
              <div key={element.key}><FormField label={element.label} fieldName={element.key} fieldType={element.type} value={isEdit ? initialValues[element.key] : ''} /></div>
            ))}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-save">Save</button>
        </Modal.Footer>
      </Modal>
      );
  }
}

export default EditGridModal;
