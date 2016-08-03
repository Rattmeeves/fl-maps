import { Categories } from '../categories';

Meteor.publish("categories",function(){
   return Categories.find({});
});