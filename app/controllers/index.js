import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
// import { isBlank } from '@ember/utils';

export default Controller.extend({
	textMessage: '',
	responseMessage: '',

	isValid: match('textMessage', /^(?!\s*$).+/),
	isDisabled: not('isValid'),

	actions: {
		sendMessage() {
			const text = this.get('textMessage');
			const newMessage = this.store.createRecord('message', { text: text });
			newMessage.save();

			this.set('responseMessage', `Thank you for your message ${this.get('textMessage')}`);
			this.set('textMessage', '');
		}
	}
});
