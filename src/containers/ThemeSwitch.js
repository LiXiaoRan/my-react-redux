import { connect } from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'

const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
