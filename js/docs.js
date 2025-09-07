(function (factory) {
  typeof define === 'function' && define.amd ? define('NSW', factory) :
    factory();
})((function () {
  'use strict';

  const searchValues = [{ 
    label: '1.1 Purpose Of This Guide', 
    template: 'result', 
    keywords: 'purpose guide, biodiversity assessment method calculator, scope structure guide, introduction, bam-c, user guide, purpose, scope, how to use, biodiversity offsets scheme, bam 2020, threatened species, plant community type, vegetation integrity, like-for-like rules', 
    url: 'core/1-get-started/1.1-purpose-of-this-guide.html' 
  },{ 
    label: '1.2 Biodiversity Assessment Method Calculator', 
    template: 'result', 
    keywords: 'biodiversity assessment method calculator, bam-c overview, tool functions, user guide, calculator purpose, data inputs, outputs, biodiversity offsets scheme, bam 2020, threatened species, vegetation integrity, credit calculation, assessment workflow', 
    url: 'core/1-get-started/1.2-biodiversity-assessment-method-calculator.html' 
  },{ 
    label: '1.3 Scope And Structure Of The Guide', 
    template: 'result', 
    keywords: 'scope structure guide, document structure, sections overview, how to use, navigation, conventions, bam-c, biodiversity offsets scheme, bam 2020, assessment types, tabs overview', 
    url: 'core/1-get-started/1.3-scope-and-structure-of-the-guide.html' 
  },{ 
    label: 'Introduction', 
    template: 'result', 
    keywords: 'introduction, guide overview, bam-c, purpose, scope, how to use, biodiversity offsets scheme, bam 2020, threatened species, vegetation, assessments', 
    url: 'core/1-get-started/introduction.html' 
  },
  { 
    label: 'Shortened Forms', 
    template: 'result', 
    keywords: 'abbreviations, acronyms, glossary, terms, bam-c, bam 2020, pct, tec, vi, boams, ibra', 
    url: 'core/1-get-started/shortened-forms.html' 
  },
  { 
    label: '2.1 Creating A Case Number', 
    template: 'result', 
    keywords: 'create case number, boams, start assessment, case management, new case, setup, login, bam-c', 
    url: 'core/2-using-BOAMS/2.1-creating-a-case-number.html' 
  },
  { 
    label: '2.2 Bam C User Access', 
    template: 'result', 
    keywords: 'user access, permissions, roles, login, boams access, accredited assessor, account setup, bam-c', 
    url: 'core/2-using-BOAMS/2.2-bam-c-user-access.html' 
  },
  { 
    label: '2.3 Updates To Bam C Functionality Or Data', 
    template: 'result', 
    keywords: 'updates, data refresh, functionality changes, release notes, versions, bionet, pct updates, bam-c', 
    url: 'core/2-using-BOAMS/2.3-updates-to-bam-c-functionality-or-data.html' 
  },
  { 
    label: '2.4 Download Supporting Documentation', 
    template: 'result', 
    keywords: 'download documents, supporting docs, templates, reports, resources, attachments, boams, bam-c', 
    url: 'core/2-using-BOAMS/2.4-download-supporting-documentation.html' 
  },
  { 
    label: '2.5 Delete Cases', 
    template: 'result', 
    keywords: 'delete case, remove case, archive, case management, boams, bam-c, data removal', 
    url: 'core/2-using-BOAMS/2.5-delete-cases.html' 
  },
  { 
    label: 'Using Biodiversity Offsets', 
    template: 'result', 
    keywords: 'boams, access bam-c, manage cases, workflows, submissions, consent authority, offsets scheme', 
    url: 'core/2-using-BOAMS/using-biodiversity-offsets.html' 
  },
  { 
    label: '3.1 Open An Existing Assessment Revision', 
    template: 'result', 
    keywords: 'open revision, load assessment, continue work, case revision, versioning, bam-c', 
    url: 'core/3-general-functions/3.1-open-an-existing-assessment-revision.html' 
  },
  { 
    label: '3.2 Save An Assessment', 
    template: 'result', 
    keywords: 'save assessment, draft save, autosave, progress, bam-c, data entry', 
    url: 'core/3-general-functions/3.2-save-an-assessment.html' 
  },
  { 
    label: '3.3 Save A New Revision', 
    template: 'result', 
    keywords: 'new revision, version control, duplicate revision, copy, bam-c, case updates', 
    url: 'core/3-general-functions/3.3-save-a-new-revision.html' 
  },
  { 
    label: '3.4 Cancel An Assessment', 
    template: 'result', 
    keywords: 'cancel assessment, stop work, close case, terminate revision, bam-c', 
    url: 'core/3-general-functions/3.4-cancel-an-assessment.html' 
  },
  { 
    label: '3.5 Delete An Assessment Revision', 
    template: 'result', 
    keywords: 'delete revision, remove version, clean up, manage revisions, bam-c', 
    url: 'core/3-general-functions/3.5-delete-an-assessment-revision.html' 
  },
  { 
    label: '3.6 Finalise An Assessment Revision', 
    template: 'result', 
    keywords: 'finalise revision, lock assessment, complete, submission ready, validation, bam-c', 
    url: 'core/3-general-functions/3.6-finalise-an-assessment-revision.html' 
  },
  { 
    label: '3.7 Reopen A Revision After Finalising', 
    template: 'result', 
    keywords: 'reopen revision, undo finalise, edit after finalisation, revision control, bam-c', 
    url: 'core/3-general-functions/3.7-reopen-a-revision-after-finalising.html' 
  },
  { 
    label: '3.8 Use Boams To Submit Consent Authority', 
    template: 'result', 
    keywords: 'submit case, consent authority, boams submission, lodgement, workflow, bam-c', 
    url: 'core/3-general-functions/3.8-use-BOAMS-to-submit-consent-authority.html' 
  },
  { 
    label: '3.9 Print A Report', 
    template: 'result', 
    keywords: 'print report, export, pdf, reporting, outputs, summary, bam-c', 
    url: 'core/3-general-functions/3.9-print-a-report.html' 
  },
  { 
    label: 'General Functions', 
    template: 'result', 
    keywords: 'general functions, case management, revisions, save, finalise, submit, print, bam-c', 
    url: 'core/3-general-functions/general-functions.html' 
  },
  { 
    label: '4.1 Assessment Details Tab 1', 
    template: 'result', 
    keywords: 'assessment details, development clearing, tab 1, project info, assessor details, site info', 
    url: 'core/4-development-clearing/4.1-assessment-details-tab-1.html' 
  },
  { 
    label: '4.2 Site Context Tab 2', 
    template: 'result', 
    keywords: 'site context, constraints, mapping, ibra subregion, landscapes, proximity, tab 2', 
    url: 'core/4-development-clearing/4.2-site-context-tab-2.html' 
  },
  { 
    label: '4.3 Vegetation Tab 3', 
    template: 'result', 
    keywords: 'vegetation, pct, condition, zones, benchmarks, mapping, tab 3', 
    url: 'core/4-development-clearing/4.3-vegetation-tab-3.html' 
  },
  { 
    label: '4.4 Habitat Suitability Predicted Tab 4', 
    template: 'result', 
    keywords: 'habitat suitability predicted, species habitat, modeled presence, filters, tab 4', 
    url: 'core/4-development-clearing/4.4-habitat-suitability-predicted-tab-4.html' 
  },
  { 
    label: '4.5 Habitat Suitability Candidate Tab 5', 
    template: 'result', 
    keywords: 'habitat suitability candidate, candidate species, survey triggers, tab 5', 
    url: 'core/4-development-clearing/4.5-habitat-suitability-candidate-tab-5.html' 
  },
  { 
    label: '4.6 Habitat Survey Tab 6', 
    template: 'result', 
    keywords: 'habitat survey, plot, transect, survey effort, detection, tab 6', 
    url: 'core/4-development-clearing/4.6-habitat-survey-tab-6.html' 
  },
  { 
    label: '4.7 Credits Tab 7', 
    template: 'result', 
    keywords: 'credits, ecosystem credits, species credits, calculations, tab 7', 
    url: 'core/4-development-clearing/4.7-credits-tab-7.html' 
  },
  { 
    label: '4.8 Credit Classes Tab 8', 
    template: 'result', 
    keywords: 'credit classes, like-for-like, otg, vegetation class, tec, tab 8', 
    url: 'core/4-development-clearing/4.8-credit-classes-tab-8.html' 
  },
  { 
    label: '4.9 Price Tab 9', 
    template: 'result', 
    keywords: 'price, cost estimate, credit price, calculator, tab 9', url: 'core/4-development-clearing/4.9-price-tab-9.html' 
  },
  { 
    label: 'Creating A Development Clearing Assessment', 
    template: 'result', 
    keywords: 'development assessment, clearing, workflow, tabs, vegetation, habitat, credits, price', 
    url: 'core/4-development-clearing/creating-a-development-clearing-assessment.html' 
  },
  { 
    label: '5.1 Assessment Details Tab 1', 
    template: 'result', 
    keywords: 'assessment details, small area, streamlined module, tab 1, project info, limits', 
    url: 'core/5-small-area/5.1-assessment-details-tab-1.html' 
  },
  { 
    label: '5.2 Site Context Tab 2', 
    template: 'result', 
    keywords: 'site context, small area, mapping, constraints, ibra, tab 2', 
    url: 'core/5-small-area/5.2-site-context-tab-2.html' 
  },
  { 
    label: '5.3 Vegetation Tab 3', 
    template: 'result', 
    keywords: 'vegetation, small area, pct, condition, zones, benchmarks, tab 3', 
    url: 'core/5-small-area/5.3-vegetation-tab-3.html' 
  },
  { 
    label: '5.4 Habitat Suitability Predicted Tab 4', 
    template: 'result', 
    keywords: 'habitat suitability predicted, small area, modeled presence, species list, tab 4', 
    url: 'core/5-small-area/5.4-habitat-suitability-predicted-tab-4.html' 
  },
  { 
    label: '5.5 Habitat Suitability Candidate Tab 5', 
    template: 'result', 
    keywords: 'habitat suitability candidate, small area, candidate species, survey needs, tab 5', 
    url: 'core/5-small-area/5.5-habitat-suitability-candidate-tab-5.html' 
  },
  { 
    label: '5.6 Habitat Survey Tab 6', 
    template: 'result', 
    keywords: 'habitat survey, small area, plots, effort, detection, tab 6', 
    url: 'core/5-small-area/5.6-habitat-survey-tab-6.html' 
  },
  { 
    label: '5.7 Credits Tab 7', 
    template: 'result', 
    keywords: 'credits, small area, ecosystem credits, species credits, tab 7', 
    url: 'core/5-small-area/5.7-credits-tab-7.html' 
  },
  { 
    label: '5.8 Credit Classes Tab 8', 
    template: 'result', 
    keywords: 'credit classes, small area, like-for-like, otg, vegetation class, tab 8', 
    url: 'core/5-small-area/5.8-credit-classes-tab-8.html' 
  },
  { 
    label: '5.9 Price Tab 9', 
    template: 'result', 
    keywords: 'price, small area, cost estimate, credit price, tab 9', 
    url: 'core/5-small-area/5.9-price-tab-9.html' 
  },
  { 
    label: 'Creating A Small Area Assessment', 
    template: 'result', 
    keywords: 'small area assessment, streamlined, area limits, workflow, tabs, credits, price', 
    url: 'core/5-small-area/creating-a-small-area-assessment.html' 
  },
  { 
    label: '6.1 Assessment Details Tab 1', 
    template: 'result', 
    keywords: 'assessment details, scattered trees, tab 1, project info, tree counts', 
    url: 'core/6-scattered-trees/6.1-assessment-details-tab-1.html' 
  },
  { 
    label: '6.2 Site Context Tab 2', 
    template: 'result', 
    keywords: 'site context, scattered trees, mapping, constraints, tab 2', 
    url: 'core/6-scattered-trees/6.2-site-context-tab-2.html' 
  },
  { 
    label: '6.3 Vegetation Tab 3', 
    template: 'result', 
    keywords: 'vegetation, scattered trees, condition, zones, benchmarks, tab 3', 
    url: 'core/6-scattered-trees/6.3-vegetation-tab-3.html' 
  },
  { 
    label: '6.4 Habitat Suitability Predicted Tab 4', 
    template: 'result', 
    keywords: 'habitat suitability predicted, scattered trees, species habitat, tab 4', 
    url: 'core/6-scattered-trees/6.4-habitat-suitability-predicted-tab-4.html' 
  },
  { 
    label: '6.5 Habitat Suitability Candidate Tab 5', 
    template: 'result', 
    keywords: 'habitat suitability candidate, scattered trees, candidate species, tab 5', 
    url: 'core/6-scattered-trees/6.5-habitat-suitability-candidate-tab-5.html' 
  },
  { 
    label: '6.6 Habitat Survey Tab 6', 
    template: 'result', 
    keywords: 'habitat survey, scattered trees, plots, methods, detection, tab 6', 
    url: 'core/6-scattered-trees/6.6-habitat-survey-tab-6.html' 
  },
  { 
    label: '6.7 Credits Tab 7', 
    template: 'result', 
    keywords: 'credits, scattered trees, ecosystem credits, species credits, tab 7', 
    url: 'core/6-scattered-trees/6.7-credits-tab-7.html' 
  },
  { 
    label: '6.8 Credit Classes Tab 8', 
    template: 'result', 
    keywords: 'credit classes, scattered trees, like-for-like, otg, tab 8', 
    url: 'core/6-scattered-trees/6.8-credit-classes-tab-8.html' 
  },
  { 
    label: '6.9 Price Tab 9', 
    template: 'result', 
    keywords: 'price, scattered trees, cost estimate, credit price, tab 9', 
    url: 'core/6-scattered-trees/6.9-price-tab-9.html' 
  },
  { 
    label: 'Creating A Scattered Trees Assessment', 
    template: 'result', 
    keywords: 'scattered trees assessment, workflow, tabs, habitat, credits, price', 
    url: 'core/6-scattered-trees/creating-a-scattered-trees-assessment.html' 
  },
  { label: '7.1 Assessment Details Tab 1', 
    template: 'result', 
    keywords: 'assessment details, stewardship, offset site, project info, tab 1', 
    url: 'core/7-stewardship/7.1-assessment-details-tab-1.html' 
  },
  { 
    label: '7.2 Site Context Tab 2', 
    template: 'result', 
    keywords: 'site context, stewardship, offset site, mapping, constraints, ibra, tab 2', 
    url: 'core/7-stewardship/7.2-site-context-tab-2.html' 
  },
  { 
    label: '7.3 Vegetation Tab 3', 
    template: 'result', 
    keywords: 'vegetation, stewardship, pct, condition, vegetation zones, benchmarks, tab 3', 
    url: 'core/7-stewardship/7.3-vegetation-tab-3.html' 
  },
  { 
    label: '7.4 Habitat Suitability Predicted Tab 4', 
    template: 'result', 
    keywords: 'habitat suitability predicted, stewardship, species habitat, tab 4', 
    url: 'core/7-stewardship/7.4-habitat-suitability-predicted-tab-4.html' 
  },
  { 
    label: '7.5 Habitat Suitability Candidate Tab 5', 
    template: 'result', 
    keywords: 'habitat suitability candidate, stewardship, candidate species, tab 5', 
    url: 'core/7-stewardship/7.5-habitat-suitability-candidate-tab-5.html' 
  },
  { 
    label: '7.6 Habitat Survey Tab 6', 
    template: 'result', 
    keywords: 'habitat survey, stewardship, plots, methods, detection, tab 6', 
    url: 'core/7-stewardship/7.6-habitat-survey-tab-6.html' 
  },
  { 
    label: '7.7 Credits Tab 7', 
    template: 'result', 
    keywords: 'credits, stewardship, ecosystem credits, species credits, calculations, tab 7', 
    url: 'core/7-stewardship/7.7-credits-tab-7.html' 
  },
  { 
    label: '7.8 Credit Classes Tab 8', 
    template: 'result', 
    keywords: 'credit classes, stewardship, like-for-like, otg, tec, tab 8', 
    url: 'core/7-stewardship/7.8-credit-classes-tab-8.html' 
  },
  { 
    label: 'Creating A Stewardship Assessment', 
    template: 'result', 
    keywords: 'stewardship assessment, offset site, workflow, tabs, ecosystem credits, species credits', 
    url: 'core/7-stewardship/creating-a-stewardship-assessment.html' 
  },
  { 
    label: 'Appendix A Clearing The Bam C Cache', 
    template: 'result', 
    keywords: 'clear cache, devtools, hard reload, legacy pct, troubleshoot, bam-c, chrome, edge', 
    url: 'core/appendix/appendix-a-clearing-the-bam-c-cache.html' 
  },
  { 
    label: 'Appendix B Resources', 
    template: 'result', 
    keywords: 'resources, links, bionet, legislation, manuals, boams, maps, offset rules', 
    url: 'core/appendix/appendix-b-resources.html' 
  }];

  const defaults = {
    debounce: 200,
    characters: 1,
    populate: true,
    searchData(query, cb, eventType) {
      let data = searchValues.filter(item => item.label.toLowerCase().includes(query.toLowerCase()) || item.keywords.toLowerCase().includes(query.toLowerCase()));
      if (data.length === 0) {
        // fallback for no results found
        data = [{
          label: 'No results',
          template: 'no-results'
        }];
      }
      cb(data);
    },
    onClick(option, obj, event, cb) {
      // update input value
      const input = obj.querySelector('input');
      const linkElement = option.querySelector('a');
      input.value = linkElement.textContent;

      // close dropdown
      cb();
    }
  };
  class Autocomplete {
    constructor(element) {
      this.element = element;
      this.options = defaults;
      this.input = this.element.querySelector('.js-autocomplete__input');
      this.results = this.element.querySelector('.js-autocomplete__results');
      this.resultsList = this.results.querySelector('.js-autocomplete__list');
      this.ariaResult = this.element.querySelectorAll('.js-autocomplete__aria-results');
      this.resultClassName = this.element.querySelectorAll('.js-autocomplete__item').length > 0 ? 'js-autocomplete__item' : 'js-autocomplete__result';
      this.inputVal = '';
      this.typeId = false;
      this.searching = false;
      this.searchingClass = 'searching';
      this.dropdownActiveClass = 'active';
      this.truncateDropdown = !!(this.element.getAttribute('data-autocomplete-dropdown-truncate') && this.element.getAttribute('data-autocomplete-dropdown-truncate') === 'on');
      this.autocompleteClosed = false;
      this.clone = false;
      this.selectedLabelElement = false;
    }
    init() {
      this.initAutocompleteAria();
      this.initAutocompleteTemplates();
      this.initAutocompleteEvents();
    }
    initAutocompleteAria() {
      this.input.setAttribute('role', 'combobox');
      this.input.setAttribute('aria-autocomplete', 'list');
      const listId = this.resultsList.getAttribute('id');
      if (listId) this.input.setAttribute('aria-owns', listId);
      this.resultsList.setAttribute('role', 'list');
    }
    initAutocompleteTemplates() {
      this.templateItems = this.resultsList.querySelectorAll(`.${this.resultClassName}[data-autocomplete-template]`);
      if (this.templateItems.length < 1) this.templateItems = this.resultsList.querySelectorAll(`.${this.resultClassName}`);
      this.templates = [];
      this.templateItems.forEach((item, i) => {
        this.templates[i] = item.getAttribute('data-autocomplete-template');
      });
    }
    initAutocompleteEvents() {
      this.input.addEventListener('keyup', event => {
        this.handleInputTyped(event);
      });
      this.input.addEventListener('search', () => {
        this.updateSearch();
      });
      this.input.addEventListener('click', () => {
        this.updateSearch(true);
      });
      this.input.addEventListener('focus', () => {
        if (this.autocompleteClosed) {
          this.autocompleteClosed = false;
          return;
        }
        this.updateSearch(true);
      });
      this.input.addEventListener('blur', event => {
        this.checkFocusLost(event);
      });
      this.resultsList.addEventListener('keydown', event => {
        this.navigateList(event);
      });
      this.resultsList.addEventListener('focusout', event => {
        this.checkFocusLost(event);
      });
      window.addEventListener('keyup', event => {
        if (event.key && event.key.toLowerCase() === 'escape') {
          this.toggleOptionsList(false);
        } else if (event.key && event.key.toLowerCase() === 'enter') {
          this.selectResult(document.activeElement.closest(`.${this.resultClassName}`), event);
        }
      });
      this.resultsList.addEventListener('click', event => {
        this.selectResult(event.target.closest(`.${this.resultClassName}`), event);
      });
    }
    checkFocusLost(event) {
      if (this.element.contains(event.relatedTarget)) return;
      this.toggleOptionsList(false);
    }
    handleInputTyped(event) {
      if (event.key.toLowerCase() === 'arrowdown') {
        this.moveFocusToList();
      } else {
        this.updateSearch();
      }
    }
    moveFocusToList() {
      if (!this.element.classList.contains(this.dropdownActiveClass)) return;
      this.resetSearch();
      let index = 0;
      if (!this.elementListIsFocusable(index)) {
        index = this.getElementFocusbleIndex(index, true);
      }
      this.getListFocusableEl(index).focus();
    }
    updateSearch(bool) {
      const inputValue = this.input.value;
      if (inputValue === this.inputVal && !bool) return;
      this.inputVal = inputValue;
      if (this.typeId) clearInterval(this.typeId);
      if (this.inputVal.length < this.options.characters) {
        this.toggleOptionsList(false);
        return;
      }
      if (bool) {
        this.updateResultsList('focus');
        return;
      }
      this.typeId = setTimeout(() => {
        this.updateResultsList('type');
      }, this.options.debounce);
    }
    toggleOptionsList(bool) {
      if (bool) {
        if (this.element.classList.contains(this.dropdownActiveClass)) return;
        this.element.classList.add(this.dropdownActiveClass);
        this.input.setAttribute('aria-expanded', true);
        this.truncateAutocompleteList();
      } else {
        if (!this.element.classList.contains(this.dropdownActiveClass)) return;
        if (this.resultsList.contains(document.activeElement)) {
          this.autocompleteClosed = true;
          this.input.focus();
        }
        this.element.classList.remove(this.dropdownActiveClass);
        this.input.removeAttribute('aria-expanded');
        this.resetSearch();
      }
    }
    truncateAutocompleteList() {
      if (!this.truncateDropdown) return;
      // reset max height
      this.resultsList.style.maxHeight = '';
      // check available space
      const spaceBelow = window.innerHeight - this.input.getBoundingClientRect().bottom - 10;
      const maxHeight = parseInt(this.getComputedStyle(this.resultsList).maxHeight, 10);
      if (maxHeight > spaceBelow) {
        this.resultsList.style.maxHeight = `${spaceBelow}px`;
      } else {
        this.resultsList.style.maxHeight = '';
      }
    }
    updateResultsList(eventType) {
      if (this.searching) return;
      this.searching = true;
      this.element.classList.add(this.searchingClass);
      this.options.searchData(this.inputVal, (data, cb) => {
        this.populateResults(data, cb);
        this.element.classList.remove(this.searchingClass);
        this.toggleOptionsList(true);
        this.updateAriaRegion();
        this.searching = false;
      }, eventType);
    }
    updateAriaRegion() {
      this.resultsItems = this.resultsList.querySelectorAll(`.${this.resultClassName}[tabindex="-1"]`);
      if (this.ariaResult.length === 0) return;
      this.ariaResult[0].textContent = this.resultsItems.length;
    }
    resetSearch() {
      if (this.typeId) clearInterval(this.typeId);
      this.typeId = false;
    }
    navigateList(event) {
      const downArrow = event.key.toLowerCase() === 'arrowdown';
      const upArrow = event.key.toLowerCase() === 'arrowup';
      if (!downArrow && !upArrow) return;
      event.preventDefault();
      const selectedElement = document.activeElement.closest(`.${this.resultClassName}`) || document.activeElement;
      const index = Array.prototype.indexOf.call(this.resultsItems, selectedElement);
      const newIndex = this.getElementFocusbleIndex(index, downArrow);
      this.getListFocusableEl(newIndex).focus();
    }
    getElementFocusbleIndex(index, nextItem) {
      let newIndex = nextItem ? index + 1 : index - 1;
      if (newIndex < 0) newIndex = this.resultsItems.length - 1;
      if (newIndex >= this.resultsItems.length) newIndex = 0;
      if (!this.elementListIsFocusable(newIndex)) {
        return this.getElementFocusbleIndex(newIndex, nextItem);
      }
      return newIndex;
    }
    elementListIsFocusable(index) {
      const item = this.resultsItems[index];
      const role = item.getAttribute('role');
      if (role && role === 'presentation') {
        return false;
      }
      return true;
    }
    getListFocusableEl(index) {
      let newFocus = this.resultsItems[index];
      const focusable = newFocus.querySelector('button:not([disabled]), [href]');
      if (focusable.length > 0) {
        newFocus = focusable;
      }
      return newFocus;
    }
    selectResult(result, event) {
      if (!result) return;
      if (this.options.onClick) {
        this.options.onClick(result, this.element, event, () => {
          this.toggleOptionsList(false);
        });
      } else {
        this.input.value = this.getResultContent(result);
        this.toggleOptionsList(false);
      }
      this.inputVal = this.input.value;
    }
    getResultContent(result) {
      this.selectedLabelElement = result.querySelector('[data-autocomplete-label]');
      return this.selectedLabelElement ? this.selectedLabelElement.textContent : result.textContent;
    }
    populateResults(data, cb) {
      let innerHtml = '';
      data.forEach(item => {
        innerHtml += this.getItemHtml(item);
      });
      if (this.options.populate) this.resultsList.innerHTML = innerHtml; else if (cb) cb(innerHtml);
    }
    getItemHtml(data) {
      this.clone = this.getClone(data);
      this.clone.setAttribute('tabindex', '-1');
      Object.keys(data).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (key === 'label') this.setLabel(data[key]); else if (key === 'class') this.setClass(data[key]); else if (key === 'url') this.setUrl(data[key]); else if (key === 'src') this.setSrc(data[key]); else this.setKey(key, data[key]);
        }
      });
      return this.clone.outerHTML;
    }
    getClone(data) {
      let item = false;
      if (this.templateItems.length === 1 || !data.template) {
        [item] = this.templateItems;
      } else {
        this.templateItems.forEach((templateItem, i) => {
          if (data.template === this.templates[i]) {
            item = templateItem;
          }
        });
        if (!item) [item] = this.templateItems;
      }
      return item.cloneNode(true);
    }
    setLabel(label) {
      const labelElement = this.clone.querySelector('[data-autocomplete-label]');
      if (labelElement) {
        labelElement.textContent = label;
      } else {
        this.clone.textContent = label;
      }
    }
    setClass(classList) {
      const classesArray = classList.split(' ');
      this.clone.classList.add(classesArray[0]);
      if (classesArray.length > 1) this.setClass(classesArray.slice(1).join(' '));
    }
    setUrl(url) {
      const linkElement = this.clone.querySelector('[data-autocomplete-url]');
      if (linkElement) linkElement.setAttribute('href', url);
    }
    setSrc(src) {
      const imgElement = this.clone.querySelector('[data-autocomplete-src]');
      if (imgElement) imgElement.setAttribute('src', src);
    }
    setKey(key, value) {
      const subElement = this.clone.querySelector(`[data-autocomplete-${key}]`);
      if (subElement) {
        if (subElement.hasAttribute('data-autocomplete-html')) subElement.innerHTML = value; else subElement.textContent = value;
      }
    }
  }

  class ExpandableSearch {
    constructor(element) {
      this.element = element;
      this.searchInput = this.element.querySelector('.js-search-input');
      this.buttons = this.element.querySelectorAll('.js-open-search');
      this.searchArea = this.element.querySelector('.js-search-area');
      this.hasContentClass = 'active';
    }
    init() {
      this.searchInput.addEventListener('input', event => {
        const input = event.target;
        if (input.value.length > 0) {
          input.classList.add(this.hasContentClass);
          input.setAttribute('aria-expanded', true);
        } else {
          input.classList.remove(this.hasContentClass);
          input.setAttribute('aria-expanded', false);
        }
      });
      this.buttons.forEach(element => {
        element.addEventListener('click', () => {
          if (this.searchInput.classList.contains(this.hasContentClass)) {
            this.searchArea.hidden = false;
            this.searchInput.focus();
          }
        });
      });
    }
  }

  /* eslint-disable new-cap */
  /* eslint-disable no-undef */
  class DownloadPDF {
    constructor(element) {
      this.element = element;
      this.contentClass = this.element.getAttribute('data-pdf-content');
      this.content = this.contentClass ? document.querySelector(`.${this.contentClass}`) : document.body;
      this.name = this.element.getAttribute('data-pdf-title') || document.title;
      this.buttonText = this.element.querySelector('span:not(.nsw-material-icons)');
    }
    init() {
      this.element.addEventListener('click', () => {
        this.downloadEvent();
      });
      this.element.addEventListener('keyup', event => {
        if (event.code && event.code.toLowerCase() === 'enter' || event.key && event.key.toLowerCase() === 'enter') {
          this.downloadEvent();
        }
      });
    }


    
downloadEvent() {
  const originalButtonText = this.buttonText.innerText;
  this.buttonText.innerText = 'Building PDF...';

  html2canvas(this.content).then(canvas => {
    const { jsPDF } = window.jspdf; // correct UMD import
    const imgData = canvas.toDataURL('image/png');

    // A4 page size in px at 96dpi
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add more pages if content overflows
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${this.name}.pdf`);
    this.buttonText.innerText = originalButtonText;
  }).catch(error => {
    console.error('An error occurred:', error);
    this.buttonText.innerText = originalButtonText;
  });
}

  }

  // Initialise PDF download buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.js-download-page').forEach(el => {
    const dl = new DownloadPDF(el);
    dl.init();
  });
});

  class ColorSwatches {
    constructor(element, opts) {
      this.element = element;
      this.options = opts;
      this.target = document.querySelectorAll(this.element.getAttribute('data-target') || 'body');
      this.selectedClass = 'nsw-color-swatches__item--selected';
      this.select = false;
      this.list = false;
      this.swatches = false;
      this.labels = false;
      this.selectedLabel = false;
      this.focusOutId = false;
      const [color] = Object.keys(this.options);
      this.color = color;
      this.dataTable = document.querySelector('.js-color-swatches__content');
      this.customAttrArray = false;
    }
    init() {
      this.target.forEach(element => {
        element.classList.add(this.color);
      });
      this.initOptions();
      this.initCustomSelect();
      this.createColorData();
      this.initEvents();
    }
    createColorData() {
      if (this.dataTable) {
        const data = this.options[this.color].content;
        let customContent = '';
        Object.keys(data).forEach(element => {
          customContent = `${customContent}
        <tr class="nsw-color-swatches__data"><td><div class="nsw-docs__swatch" style="background-color: var(${data[element].var})"></div></td>
        <td><p>${element}</p></td>               
        <td><p>${data[element].hex}</p></td>
        <td><p><code>${data[element].var}</code></p></td></tr>`;
        });
        this.dataTable.innerHTML = customContent;
      }
    }
    initOptions() {
      const select = this.element.querySelector('.js-color-swatches__select');
      if (!select) return;
      this.select = select;
      let customContent = '';
      Object.keys(this.options).forEach(element => {
        customContent = `${customContent}<option value="${this.options[element].val}" data-color="${element}" data-style="background-color: ${this.options[element].hex};">${this.options[element].val}</option>`;
      });
      this.select.innerHTML = customContent;
    }
    initCustomSelect() {
      if (this.select === false) return;
      let customContent = '';
      for (let i = 0; i < this.select.options.length; i += 1) {
        const ariaChecked = i === this.select.selectedIndex ? 'true' : 'false';
        const customClass = i === this.select.selectedIndex ? ` ${this.selectedClass}` : '';
        const customAttributes = this.getSwatchCustomAttr(this.select.options[i]);
        customContent = `${customContent}<li class="nsw-color-swatches__item js-color-swatches__item${customClass}" role="radio" aria-checked="${ariaChecked}" data-color="${this.select.options[i].getAttribute('data-color')}" data-value="${this.select.options[i].value}"><span class="js-color-swatches__option" tabindex="0"${customAttributes}><span class="sr-only js-color-swatch__label">${this.select.options[i].text}</span><span aria-hidden="true" style="${this.select.options[i].getAttribute('data-style')}" class="nsw-color-swatches__swatch"></span></span></li>`;
      }
      const list = document.createElement('ul');
      list.setAttribute('class', 'nsw-color-swatches__list js-color-swatches__list');
      list.setAttribute('role', 'radiogroup');
      list.innerHTML = customContent;
      this.element.insertBefore(list, this.select);
      this.select.classList.add('nsw-hide-xs');
      this.list = this.element.querySelector('.js-color-swatches__list');
      this.swatches = this.list.getElementsByClassName('js-color-swatches__option');
      this.labels = this.list.getElementsByClassName('js-color-swatch__label');
      this.selectedLabel = this.element.getElementsByClassName('js-color-swatches__color');
    }
    initEvents() {
      // detect focusin/focusout event - update selected color label
      if (this.list) {
        this.list.addEventListener('focusin', () => {
          if (this.focusOutId) clearTimeout(this.focusOutId);
          this.updateSelectedLabel(document.activeElement);
        });
        this.list.addEventListener('focusout', () => {
          this.focusOutId = setTimeout(() => {
            this.resetSelectedLabel();
          }, 200);
        });
      }

      // mouse move events
      for (let i = 0; i < this.swatches.length; i += 1) {
        this.handleHoverEvents(i);
      }

      // --select variation only
      if (this.select) {
        // click event - select new option
        this.list.addEventListener('click', event => {
          // update selected option
          this.resetSelectedOption(event.target);
        });

        // space key - select new option
        this.list.addEventListener('keydown', event => {
          if (event.keyCode && event.keyCode === 32 || event.key && event.key === ' ' || event.keyCode && event.keyCode === 13 || event.key && event.key.toLowerCase() === 'enter') {
            // update selected option
            this.resetSelectedOption(event.target);
          }
        });
      }
    }
    handleHoverEvents(index) {
      this.swatches[index].addEventListener('mouseenter', () => {
        this.updateSelectedLabel(this.swatches[index]);
      });
      this.swatches[index].addEventListener('mouseleave', () => {
        this.resetSelectedLabel();
      });
    }
    resetSelectedOption(target) {
      if (this.color) {
        this.target.forEach(element => {
          element.classList.remove(this.color);
        });
      }
      const option = target.closest('.js-color-swatches__item');
      this.color = option.getAttribute('data-color');
      if (!option) return;
      const selectedSwatch = this.list.querySelector(`.${this.selectedClass}`);
      if (selectedSwatch) {
        selectedSwatch.classList.remove(this.selectedClass);
        selectedSwatch.setAttribute('aria-checked', 'false');
      }
      option.classList.add(this.selectedClass);
      option.setAttribute('aria-checked', 'true');
      this.target.forEach(element => {
        element.classList.add(this.color);
      });
      // update select element
      this.updateNativeSelect(option.getAttribute('data-value'));
      this.createColorData();
    }
    resetSelectedLabel() {
      const selectedSwatch = this.list.getElementsByClassName(this.selectedClass);
      if (selectedSwatch.length > 0) this.updateSelectedLabel(selectedSwatch[0]);
    }
    updateSelectedLabel(swatch) {
      const newLabel = swatch.getElementsByClassName('js-color-swatch__label');
      if (newLabel.length === 0) return;
      this.selectedLabel[0].textContent = newLabel[0].textContent;
    }
    updateNativeSelect(value) {
      for (let i = 0; i < this.select.options.length; i += 1) {
        if (this.select.options[i].value === value) {
          this.select.selectedIndex = i; // set new value
          this.select.dispatchEvent(new CustomEvent('change')); // trigger change event
          break;
        }
      }
    }
    getSwatchCustomAttr(swatch) {
      this.customAttrArray = swatch.getAttribute('data-custom-attr');
      if (!this.customAttrArray) return '';
      let customAttr = ' ';
      const list = this.customAttrArray.split(',');
      for (let i = 0; i < list.length; i += 1) {
        const attr = list[i].split(':');
        customAttr = `${customAttr + attr[0].trim()}="${attr[1].trim()}" `;
      }
      return customAttr;
    }
  }

  function initDocs() {
    const codeButtons = document.querySelectorAll('.js-code-button');
    codeButtons.forEach(button => {
      const code = button.nextElementSibling;
      const text = button.querySelector('span');
      button.addEventListener('click', () => {
        if (code.classList.contains('active')) {
          button.classList.remove('active');
          code.classList.remove('active');
          text.textContent = 'Show code';
        } else {
          button.classList.add('active');
          code.classList.add('active');
          text.textContent = 'Hide code';
        }
      }, false);
    });
    const copyButtons = document.querySelectorAll('.js-code-copy');
    copyButtons.forEach(button => {
      const code = button.nextElementSibling;
      const text = button.querySelector('span');
      const script = code.querySelector('script');
      script.remove();
      button.addEventListener('click', event => {
        const elem = document.createElement('textarea');
        elem.value = code.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        text.textContent = 'Copied';
        document.body.removeChild(elem);
        setTimeout(() => {
          text.textContent = 'Copy';
        }, 2000);
      }, false);
    });
    const navLinks = document.querySelectorAll('.nsw-docs__nav a');
    let currentURL = window.location.pathname;
    if (currentURL === '/') currentURL = '/home/index.html';
    navLinks.forEach(link => {
      let linkURL = link.getAttribute('href');
      const sanitisedURL = new URL(linkURL, window.location.origin);
      linkURL = sanitisedURL.pathname + sanitisedURL.search + sanitisedURL.hash;
      if (linkURL === '/') linkURL = '/home/index.html';
      if (currentURL.match(linkURL)) {
        link.classList.add('current');
        if (link.closest('ul').classList.contains('nsw-main-nav__sub-list')) {
          const list = link.closest('.nsw-main-nav__sub-nav');
          const button = list.previousElementSibling;
          list.classList.add('current-section');
          button.classList.add('current-section');
          button.click();
        } else {
          link.classList.add('current-section');
        }
      }
    });
    const autoComplete = document.querySelectorAll('.js-autocomplete');
    if (autoComplete) {
      autoComplete.forEach(element => {
        new Autocomplete(element).init();
      });
    }
    const expandableSearch = document.querySelectorAll('.js-header');
    if (expandableSearch) {
      expandableSearch.forEach(element => {
        new ExpandableSearch(element).init();
      });
    }
    const downloadPDF = document.querySelectorAll('.js-download-page');
    if (downloadPDF) {
      downloadPDF.forEach(element => {
        new DownloadPDF(element).init();
      });
    }
    const options = {
      blue: {
        val: 'Blue 01',
        hex: '#002664',
        content: {
          'Brand Dark': {
            hex: 'Blue 01 <code>#002664</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Blue 04 <code>#CBEDFD</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Blue 02 <code>#146CFD</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Red 02 <code>#D7153A</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#002664</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#551A8B</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(0, 38, 100, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(0, 38, 100, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#0086B3</code>',
            var: '--nsw-focus'
          }
        }
      },
      purple: {
        val: 'Purple 01',
        hex: '#441170',
        content: {
          'Brand Dark': {
            hex: 'Purple 01 <code>#441170</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Purple 04 <code>#E6E1FD</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Purple 02 <code>#8055F1</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Yellow 02 <code>#FAAF05</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#441170</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#70114D</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(68, 17, 112, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(68, 17, 112, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#351BB5</code>',
            var: '--nsw-focus'
          }
        }
      },
      fuchsia: {
        val: 'Fuchsia 01',
        hex: '#65004D',
        content: {
          'Brand Dark': {
            hex: 'Fuchsia 01 <code>#65004D</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Fuchsia 04 <code>#F0E6ED</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Fuchsia 02 <code>#D912AE</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Orange 02 <code>#F3631B</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#65004D</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#983379</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(101, 0, 77, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(101, 0, 77, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#9D00B4</code>',
            var: '--nsw-focus'
          }
        }
      },
      red: {
        val: 'Red 01',
        hex: '#630019',
        content: {
          'Brand Dark': {
            hex: 'Red 01 <code>#630019</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Red 04 <code>#FFE6EA</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Red 02 <code>#D7153A</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Brown 02 <code>#B68D5D</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#630019</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#9C3D1B</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(99, 0, 25, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(99, 0, 25, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#B2006E</code>',
            var: '--nsw-focus'
          }
        }
      },
      orange: {
        val: 'Orange 01',
        hex: '#941B00',
        content: {
          'Brand Dark': {
            hex: 'Orange 01 <code>#941B00</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Orange 04 <code>#FDEDDF</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Orange 02 <code>#F3631B</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Purple 02 <code>#8055F1</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#941B00</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#7D4D27</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(148, 27, 0, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(148, 27, 0, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#E3002A</code>',
            var: '--nsw-focus'
          }
        }
      },
      brown: {
        val: 'Brown 01',
        hex: '#523719',
        content: {
          'Brand Dark': {
            hex: 'Brown 01 <code>#523719</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Brown 04 <code>#EDE3D7</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Brown 02 <code>#B68D5D</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Teal 02 <code>#2E808E</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#523719</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#914132</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(82, 55, 25, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(82, 55, 25, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#8F3B2B</code>',
            var: '--nsw-focus'
          }
        }
      },
      yellow: {
        val: 'Yellow 01',
        hex: '#694800',
        content: {
          'Brand Dark': {
            hex: 'Yellow 01 <code>#694800</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Yellow 04 <code>#FFF4CF</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Yellow 02 <code>#FAAF05</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Green 02 <code>#00AA45</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#694800</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#5B5A16</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(105, 72, 0, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(105, 72, 0, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#B83B00</code>',
            var: '--nsw-focus'
          }
        }
      },
      green: {
        val: 'Green 01',
        hex: '#004000',
        content: {
          'Brand Dark': {
            hex: 'Green 01 <code>#004000</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Green 04 <code>#DBFADF</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Green 02 <code>#00AA45</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Blue 02 <code>#146CFD</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#004000</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#016740</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(0, 64, 0, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(0, 64, 0, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#348F00</code>',
            var: '--nsw-focus'
          }
        }
      },
      teal: {
        val: 'Teal 01',
        hex: '#0B3F47',
        content: {
          'Brand Dark': {
            hex: 'Teal 01 <code>#0B3F47</code>',
            var: '--nsw-brand-dark'
          },
          'Brand Light': {
            hex: 'Teal 04 <code>#D1EEEA</code>',
            var: '--nsw-brand-light'
          },
          'Brand Supplementary': {
            hex: 'Teal 02 <code>#2E808E</code>',
            var: '--nsw-brand-supplementary'
          },
          'Brand Accent': {
            hex: 'Fuchsia 02 <code>#D912AE</code>',
            var: '--nsw-brand-accent'
          },
          'Link colour': {
            hex: '<code>#0B3F47</code>',
            var: '--nsw-link'
          },
          'Visited link colour': {
            hex: '<code>#265E76</code>',
            var: '--nsw-visited'
          },
          'Hover background colour': {
            hex: '<code>rgba(11, 63, 71, 0.1)</code>',
            var: '--nsw-hover'
          },
          'Active background colour': {
            hex: '<code>rgba(11, 63, 71, 0.2)</code>',
            var: '--nsw-active'
          },
          'Focus outline colour': {
            hex: '<code>#168B70</code>',
            var: '--nsw-focus'
          }
        }
      }
    };
    const colorSwatches = document.querySelectorAll('.js-color-swatches');
    if (colorSwatches) {
      colorSwatches.forEach(element => {
        new ColorSwatches(element, options).init();
      });
    }
    const partial = {
      'blue-accent': {
        val: 'Blue 02',
        hex: '#146CFD',
        content: {
          'Brand Accent': {
            hex: 'Blue 02 <code>#146CFD</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'purple-accent': {
        val: 'Purple 01',
        hex: '#8055F1',
        content: {
          'Brand Accent': {
            hex: 'Purple 02 <code>#8055F1</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'fuchsia-accent': {
        val: 'Fuchsia 02',
        hex: '#D912AE',
        content: {
          'Brand Accent': {
            hex: 'Fuchsia 02 <code>#D912AE</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'red-accent': {
        val: 'Red 02',
        hex: '#D7153A',
        content: {
          'Brand Accent': {
            hex: 'Red 02 <code>#D7153A</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'orange-accent': {
        val: 'Orange 02',
        hex: '#F3631B',
        content: {
          'Brand Accent': {
            hex: 'Orange 02 <code>#F3631B</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'brown-accent': {
        val: 'Brown 02',
        hex: '#B68D5D',
        content: {
          'Brand Accent': {
            hex: 'Brown 02 <code>#B68D5D</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'yellow-accent': {
        val: 'Yellow 02',
        hex: '#FAAF05',
        content: {
          'Brand Accent': {
            hex: 'Yellow 02 <code>#FAAF05</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'green-accent': {
        val: 'Green 02',
        hex: '#00AA45',
        content: {
          'Brand Accent': {
            hex: 'Green 02 <code>#00AA45</code>',
            var: '--nsw-brand-accent'
          }
        }
      },
      'teal-accent': {
        val: 'Teal 02',
        hex: '#2E808E',
        content: {
          'Brand Accent': {
            hex: 'Teal 02 <code>#2E808E</code>',
            var: '--nsw-brand-accent'
          }
        }
      }
    };
    const colorSwatch = document.querySelectorAll('.js-color-swatch');
    if (colorSwatch) {
      colorSwatch.forEach(element => {
        new ColorSwatches(element, partial).init();
      });
    }
  }
  initDocs();


// Ensure DOM updates from initDocs have settled before running highlights
setTimeout(runHighlightAndScroll, 50);

function runHighlightAndScroll() {
  const params = new URLSearchParams(window.location.search);
  const term = params.get('q');
  const hash = window.location.hash || '';
  if (!term) return;

  // Extract target match index from hash
  let targetMatch = null;
  if (hash.startsWith('#match-')) {
    const parts = hash.slice(1).split('-');
    if (parts.length >= 3) targetMatch = parseInt(parts[2], 10);
  }

  const main = document.querySelector('.nsw-docs__main');
  if (!main) return;

  const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const tag = node.parentNode?.nodeName.toLowerCase();
      if (['script','style','code','pre','textarea','a','noscript'].includes(tag)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  let matchCount = 0;
  nodes.forEach(node => {
    const text = node.nodeValue;
    let lastIdx = 0;
    let m;
    const frag = document.createDocumentFragment();

    while ((m = regex.exec(text)) !== null) {
      if (m.index > lastIdx) frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
      matchCount++;
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.textContent = m[0];
      if (targetMatch && matchCount === targetMatch && hash.startsWith('#match-')) {
        mark.id = hash.slice(1);
      }
      frag.appendChild(mark);
      lastIdx = m.index + m[0].length;
    }

    if (lastIdx === 0) return;
    if (lastIdx < text.length) frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    node.parentNode.replaceChild(frag, node);
  });

  // Scroll if applicable
  if (hash && document.getElementById(hash.slice(1))) {
    setTimeout(() => {
      document.getElementById(hash.slice(1)).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  }
}

}));



