import {UniversalButton} from './UniversalButton.tsx';
import {filteredtasksType} from '../App.tsx';
type ButtonsFilteredPropsType = {
    changeFilteredStatus:(filtered:filteredtasksType) => void

}
export const ButtonsFiltered = ({changeFilteredStatus}:ButtonsFilteredPropsType) => {
    return (
        <div>
            <UniversalButton title={'all'} callback={()=>{changeFilteredStatus('all')}}/>
            <UniversalButton title={'active'} callback={()=>{changeFilteredStatus('active')}}/>
            <UniversalButton title={'completed'} callback={()=>{changeFilteredStatus('completed')}}/>
        </div>
    );
};

