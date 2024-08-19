import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class TopicComponent extends Component {
    @action
    handleTabSelection(option, event){
        this.handleElementActiveStatus(event.currentTarget);

    }

    handleElementActiveStatus(selectedElement){
       
        const allLis = selectedElement.parentElement.querySelectorAll('li');

        // Remove 'is-active' class from all <li> elements
        allLis.forEach((li) => {
            li.classList.remove('is-active');
        });
        // Adds the "is-active" to the selected element
        selectedElement.classList.add('is-active');
    }
}