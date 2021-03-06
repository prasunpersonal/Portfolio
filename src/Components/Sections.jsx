import React from 'react'
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';

// Api Keys
const BASE_URL = "https://prasun-portfolio-server.herokuapp.com/";
const GET_ALL_EDUCATIONS = BASE_URL.concat('educations/', 'all/');
const GET_ALL_EXPERIENCES = BASE_URL.concat('experiences/', 'all/');
const GET_ALL_PROJECTS = BASE_URL.concat('projects/', 'all/');
const GET_ALL_CATEGORIES = BASE_URL.concat('projects/', 'categories/');
const GET_ALL_CERTIFICATES = BASE_URL.concat('certificates/', 'all/');
const GET_ALL_LANGUAGES = BASE_URL.concat('skills/', 'languages-and-frameworks/');
const GET_ALL_DATABASES = BASE_URL.concat('skills/', 'databases/');
const GET_ALL_PROFILES = BASE_URL.concat('skills/', 'profiles/');

export const Sections = (props) => {
	const [educations, addEducations] = React.useState([]);
	const [experiences, addExperiences] = React.useState([]);
	const [projects, addProjects] = React.useState([]);
	const [certificates, addCertificates] = React.useState([]);
	const [categories, addCategories] = React.useState([]);
	const [languages, addLanguages] = React.useState([]);
	const [databases, addDatabases] = React.useState([]);
	const [profiles, addProfiles] = React.useState([]);

	React.useEffect(() => {
		fetch(GET_ALL_EDUCATIONS).then((res) => res.json()).then((educations) => {
			addEducations(educations);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_EXPERIENCES).then((res) => res.json()).then((experiences) => {
			addExperiences(experiences);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_PROJECTS).then((res) => res.json()).then((projects) => {
			addProjects(projects);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_CATEGORIES).then((res) => res.json()).then((categories) => {
			addCategories(categories);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_CERTIFICATES).then((res) => res.json()).then((certificate) => {
			addCertificates(certificate);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_LANGUAGES).then((res) => res.json()).then((languages) => {
			addLanguages(languages);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_DATABASES).then((res) => res.json()).then((databases) => {
			addDatabases(databases);
		}).catch((e) => console.log(e));
	}, []);

	React.useEffect(() => {
		fetch(GET_ALL_PROFILES).then((res) => res.json()).then((profiles) => {
			addProfiles(profiles);
		}).catch((e) => console.log(e));
	}, []);

	return (
		<div className="sections">
			<Home />
			<About educations={educations} experiences={experiences} />
			<Projects projects={projects} categories={categories} />
			<Skills languages={languages} databases={databases} profiles={profiles} certificates={certificates} />
			<Contact />
		</div>
	)
}
