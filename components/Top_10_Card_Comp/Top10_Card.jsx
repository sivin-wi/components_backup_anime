import {Styled_content_Section,Styled_number_Section,Styled_main_Card,Styled_Img} from './Top10_Card.Styled'
import PropTypes from 'prop-types';

export const Top10_Card = ({value,img})=>{
    return(
    <Styled_main_Card className='snap-center'>
        <Styled_number_Section>{value}</Styled_number_Section>
        <Styled_content_Section>
            <Styled_Img  src={img} alt='img'/>
        </Styled_content_Section>
    </Styled_main_Card>
)}

// props validation
Top10_Card.propTypes ={
    value: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
}