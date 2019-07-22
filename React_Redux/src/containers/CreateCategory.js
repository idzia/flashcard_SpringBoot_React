import { connect } from 'react-redux';
import { postNewCategory } from '../actions/actionIndex';
import CategoryForm from '../components/CategoryForm';

const mapDispatchToProps = dispatch => {
  return {
    onAddCategory: newCategory => {
      dispatch(postNewCategory(newCategory));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CategoryForm);
