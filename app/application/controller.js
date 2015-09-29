import Ember from 'ember';

const {
  Controller,
  computed,
  get,
  set
} = Ember;

export default Controller.extend({
  isValid: false,
  input: null,

  _isValidJSON(json) {
    try {
      JSON.parse(json);
      return true;
    } catch (error){
      return false;
    }
  },

  actions: {
    validate() {
      const input = get(this, 'input');
      const schema = get(this, 'model');

      if (this._isValidJSON(input) && tv4.validate(JSON.parse(input), schema)) {
        set(this, 'isValid', true);
        set(this, 'errors', null);
      } else {
        set(this, 'isValid', false);
        set(this, 'errors', tv4.error);
      }
    }
  }
});
