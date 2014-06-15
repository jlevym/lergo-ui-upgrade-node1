'use strict';

angular.module('lergoApp').service('FilterService', function Filterservice() {
	this.languages = [ 'english', 'hebrew', 'arabic', 'russian', 'other', ];
	this.subjects = [ 'english', 'math', 'science', 'grammar', 'spelling', 'biology', 'other' ];

	/**
	 * This function require ageRange and age to verify whether age is with in
	 * the range. return true if age is in the range, else return false
	 */
	this.filterByAge = function(filter, age) {
		if (!filter.ageRange || (!filter.ageRange.min && !filter.ageRange.max)) {
			return true;
		}
		if (!age) {
			return false;
		}
		if (filter.ageRange.min && age < filter.ageRange.min) {
			return false;
		}
		if (filter.ageRange.max && age > filter.ageRange.max) {
			return false;
		}
		return true;
	};

	this.filterByLanguage = function(filter, language) {
		if (!filter.language) {
			return true;
		}
		return language === filter.language;
	};

	this.filterBySubject = function(filter, subject) {
		if (!filter.subject) {
			return true;
		}
		return subject === filter.subject;
	};

});