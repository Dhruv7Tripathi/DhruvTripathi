"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Trash2,
  Plus,
  Save,
  GraduationCap,
  Briefcase,
  Code
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const AdminPanel = () => {
  const [education, setEducation] = useState([
    {
      institution: "Example University",
      degree: "Bachelor of Computer Science",
      year: "2020-2024",
      description: "Specialized in AI and ML"
    }
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Project Name",
      description: "Project Description",
      technologies: "React, Node.js",
      link: "https://example.com"
    }
  ]);

  const [skills, setSkills] = useState([
    "React", "Node.js", "Python"
  ]);

  const [newSkill, setNewSkill] = useState("");
  const addEducation = () => {
    setEducation([...education, {
      institution: "",
      degree: "",
      year: "",
      description: ""
    }]);
  };

  const updateEducation = (index: number, field: keyof typeof education[0], value: string) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([...projects, {
      name: "",
      description: "",
      technologies: "",
      link: ""
    }]);
  };

  const updateProject = (index: number, field: keyof typeof projects[0], value: string) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  // Handlers for skills section
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };
  const saveChanges = (section: string) => {
    console.log(`Saving ${section}:`, {
      education,
      projects,
      skills
    });
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Portfolio Admin Panel</h1>

        <Tabs defaultValue="education">
          <TabsList className="mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Education Section */}
          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="mb-8 p-4 border rounded-lg">
                    <div className="grid gap-4">
                      <Input
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                      />
                      <Input
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      />
                      <Input
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) => updateEducation(index, 'year', e.target.value)}
                      />
                      <Textarea
                        placeholder="Description"
                        value={edu.description}
                        onChange={(e) => updateEducation(index, 'description', e.target.value)}
                      />
                      <Button
                        variant="destructive"
                        onClick={() => removeEducation(index)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <Button onClick={addEducation}>
                    <Plus className="w-4 h-4 mr-2" /> Add Education
                  </Button>
                  <Button onClick={() => saveChanges('education')}>
                    <Save className="w-4 h-4 mr-2" /> Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Section */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                {projects.map((project, index) => (
                  <div key={index} className="mb-8 p-4 border rounded-lg">
                    <div className="grid gap-4">
                      <Input
                        placeholder="Project Name"
                        value={project.name}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                      />
                      <Textarea
                        placeholder="Project Description"
                        value={project.description}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                      />
                      <Input
                        placeholder="Technologies Used"
                        value={project.technologies}
                        onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                      />
                      <Input
                        placeholder="Project Link"
                        value={project.link}
                        onChange={(e) => updateProject(index, 'link', e.target.value)}
                      />
                      <Button
                        variant="destructive"
                        onClick={() => removeProject(index)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <Button onClick={addProject}>
                    <Plus className="w-4 h-4 mr-2" /> Add Project
                  </Button>
                  <Button onClick={() => saveChanges('projects')}>
                    <Save className="w-4 h-4 mr-2" /> Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Section */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex gap-4 mb-4">
                    <Input
                      placeholder="New Skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                    />
                    <Button onClick={addSkill}>
                      <Plus className="w-4 h-4 mr-2" /> Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center bg-secondary rounded-lg p-2">
                        <span>{skill}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 h-auto p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <Button onClick={() => saveChanges('skills')}>
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;