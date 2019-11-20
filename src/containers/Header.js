import {connect} from 'react-redux'
import Header from '../components/Header'

//将Dumb版本的Header包装成smart
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Header)