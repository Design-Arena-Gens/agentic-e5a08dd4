'use client'

import { useState } from 'react'

interface FormData {
  name: string
  field: string
  university: string
  professor: string
  researchTitle: string
  background: string
  objectives: string
  methodology: string
  significance: string
  timeline: string
  references: string
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('form')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    field: '',
    university: '',
    professor: '',
    researchTitle: '',
    background: '',
    objectives: '',
    methodology: '',
    significance: '',
    timeline: '',
    references: ''
  })
  const [generatedProposal, setGeneratedProposal] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateProposal = () => {
    const proposal = `
RESEARCH PROPOSAL FOR MEXT SCHOLARSHIP

================================================================================

APPLICANT INFORMATION
Name: ${formData.name}
Field of Study: ${formData.field}
Target University: ${formData.university}
Prospective Supervisor: ${formData.professor}

================================================================================

RESEARCH TITLE
${formData.researchTitle}

================================================================================

1. BACKGROUND AND MOTIVATION

${formData.background}

The pursuit of this research aligns with current global challenges and advances in ${formData.field}. This study will contribute to the existing body of knowledge while addressing practical applications in the field.

================================================================================

2. RESEARCH OBJECTIVES

${formData.objectives}

Key objectives include:
• Conducting comprehensive analysis of current methodologies
• Developing innovative solutions to identified problems
• Contributing to theoretical and practical advancements in ${formData.field}
• Publishing findings in peer-reviewed journals

================================================================================

3. RESEARCH METHODOLOGY

${formData.methodology}

The research will employ a systematic approach combining theoretical analysis with practical experimentation. Data collection and analysis will follow rigorous academic standards, ensuring reproducibility and validity of results.

Research phases:
Phase 1: Literature review and theoretical framework development
Phase 2: Experimental design and pilot studies
Phase 3: Data collection and analysis
Phase 4: Results interpretation and validation
Phase 5: Thesis writing and publication preparation

================================================================================

4. SIGNIFICANCE AND EXPECTED OUTCOMES

${formData.significance}

This research is expected to:
• Advance understanding in ${formData.field}
• Provide practical solutions to current challenges
• Foster international collaboration and knowledge exchange
• Contribute to Japan's research excellence and innovation

The outcomes will benefit both academic community and industry practitioners, with potential applications in multiple domains.

================================================================================

5. RESEARCH TIMELINE

${formData.timeline}

Proposed schedule:
Year 1:
- Months 1-3: Literature review and methodology refinement
- Months 4-9: Initial experiments and data collection
- Months 10-12: Preliminary analysis and conference presentation

Year 2:
- Months 13-18: Advanced experiments and comprehensive data collection
- Months 19-21: Data analysis and interpretation
- Months 22-24: Results validation and first publication

Year 3:
- Months 25-30: Final experiments and comprehensive analysis
- Months 31-33: Thesis writing
- Months 34-36: Thesis defense preparation and final publications

================================================================================

6. REFERENCES

${formData.references}

Additional key references in ${formData.field} will be reviewed as part of the comprehensive literature analysis.

================================================================================

7. JUSTIFICATION FOR STUDYING IN JAPAN

Japan represents a global leader in ${formData.field} research and innovation. The advanced research facilities, distinguished faculty members, and collaborative research environment at ${formData.university} provide an ideal setting for this study.

Working under the guidance of ${formData.professor} will enable access to cutting-edge technologies and methodologies. The MEXT scholarship will facilitate full-time dedication to research excellence and contribute to strengthening international academic partnerships.

================================================================================

8. FUTURE CAREER PLANS

Upon completion of this doctoral program, I plan to:
• Contribute to advancing research in ${formData.field} in my home country
• Establish collaborative research networks between Japan and international institutions
• Apply acquired knowledge to address regional and global challenges
• Mentor future researchers and promote academic excellence

This research experience in Japan will be instrumental in building a career dedicated to innovation, knowledge creation, and international scientific cooperation.

================================================================================

CONCLUSION

This research proposal presents a comprehensive plan for advancing knowledge in ${formData.field}. With the support of MEXT scholarship and the excellent research environment in Japan, this project promises significant contributions to both academic understanding and practical applications.

I am committed to conducting rigorous research, collaborating with international peers, and representing the values of academic excellence that the MEXT program embodies.

================================================================================

Date: ${new Date().toLocaleDateString()}
Signature: ${formData.name}
`
    setGeneratedProposal(proposal)
    setActiveTab('preview')
  }

  const downloadProposal = () => {
    const element = document.createElement('a')
    const file = new Blob([generatedProposal], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `MEXT_Research_Proposal_${formData.name.replace(/\s+/g, '_')}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      field: '',
      university: '',
      professor: '',
      researchTitle: '',
      background: '',
      objectives: '',
      methodology: '',
      significance: '',
      timeline: '',
      references: ''
    })
    setGeneratedProposal('')
    setActiveTab('form')
  }

  return (
    <div className="container">
      <div className="header">
        <h1>MEXT Research Proposal Generator</h1>
        <p>Create a comprehensive research proposal for your MEXT scholarship application</p>
      </div>

      <div className="main-content">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'guidelines' ? 'active' : ''}`}
            onClick={() => setActiveTab('guidelines')}
          >
            Guidelines
          </button>
          <button
            className={`tab ${activeTab === 'form' ? 'active' : ''}`}
            onClick={() => setActiveTab('form')}
          >
            Create Proposal
          </button>
          {generatedProposal && (
            <button
              className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
          )}
        </div>

        {activeTab === 'guidelines' && (
          <div className="guidelines">
            <h3>MEXT Research Proposal Guidelines</h3>
            <ul>
              <li><strong>Length:</strong> Typically 2-5 pages, depending on university requirements</li>
              <li><strong>Language:</strong> English or Japanese (check your university's requirements)</li>
              <li><strong>Structure:</strong> Clear sections with logical flow and coherence</li>
              <li><strong>Research Title:</strong> Concise and descriptive (15-20 words maximum)</li>
              <li><strong>Background:</strong> Demonstrate understanding of the field and research gap</li>
              <li><strong>Objectives:</strong> Clear, specific, and achievable research goals</li>
              <li><strong>Methodology:</strong> Detailed explanation of research methods and approaches</li>
              <li><strong>Significance:</strong> Explain the impact and contribution of your research</li>
              <li><strong>Timeline:</strong> Realistic schedule for a 3-year doctoral program</li>
              <li><strong>References:</strong> Recent and relevant academic sources (APA or IEEE format)</li>
              <li><strong>Alignment:</strong> Ensure your proposal aligns with your prospective supervisor's research</li>
              <li><strong>Originality:</strong> Demonstrate novel contributions to the field</li>
            </ul>
            <h3 style={{marginTop: '1.5rem'}}>Tips for Success</h3>
            <ul>
              <li>Research your target university and professor thoroughly</li>
              <li>Be specific about research methods and expected outcomes</li>
              <li>Show enthusiasm and commitment to your research area</li>
              <li>Proofread carefully for grammar and clarity</li>
              <li>Have professors or mentors review your proposal before submission</li>
              <li>Explain why studying in Japan is essential for your research</li>
            </ul>
          </div>
        )}

        {activeTab === 'form' && (
          <form onSubmit={(e) => { e.preventDefault(); generateProposal(); }}>
            <div className="form-section">
              <h2>1. Personal Information</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="field">Field of Study *</label>
                <input
                  type="text"
                  id="field"
                  name="field"
                  value={formData.field}
                  onChange={handleInputChange}
                  placeholder="e.g., Computer Science, Mechanical Engineering, Environmental Science"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="university">Target University *</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  placeholder="e.g., University of Tokyo, Kyoto University"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="professor">Prospective Supervisor *</label>
                <input
                  type="text"
                  id="professor"
                  name="professor"
                  value={formData.professor}
                  onChange={handleInputChange}
                  placeholder="Professor name and title"
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h2>2. Research Details</h2>
              <div className="form-group">
                <label htmlFor="researchTitle">Research Title *</label>
                <input
                  type="text"
                  id="researchTitle"
                  name="researchTitle"
                  value={formData.researchTitle}
                  onChange={handleInputChange}
                  placeholder="Concise and descriptive title (15-20 words)"
                  required
                />
                <small>Make it specific and descriptive</small>
              </div>
              <div className="form-group">
                <label htmlFor="background">Background and Motivation *</label>
                <textarea
                  id="background"
                  name="background"
                  value={formData.background}
                  onChange={handleInputChange}
                  placeholder="Describe the context of your research, the problem you want to address, and why it's important. Include current state of the field and research gap."
                  required
                />
                <small>Explain the research context and gap (300-500 words)</small>
              </div>
              <div className="form-group">
                <label htmlFor="objectives">Research Objectives *</label>
                <textarea
                  id="objectives"
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                  placeholder="List specific, measurable research objectives. What do you aim to achieve?"
                  required
                />
                <small>Clear and achievable goals (200-300 words)</small>
              </div>
              <div className="form-group">
                <label htmlFor="methodology">Research Methodology *</label>
                <textarea
                  id="methodology"
                  name="methodology"
                  value={formData.methodology}
                  onChange={handleInputChange}
                  placeholder="Describe your research approach, methods, tools, and techniques. How will you conduct your research?"
                  required
                />
                <small>Detailed explanation of methods and approaches (300-500 words)</small>
              </div>
              <div className="form-group">
                <label htmlFor="significance">Significance and Expected Outcomes *</label>
                <textarea
                  id="significance"
                  name="significance"
                  value={formData.significance}
                  onChange={handleInputChange}
                  placeholder="Explain the importance of your research and its potential impact. What are the expected contributions?"
                  required
                />
                <small>Impact and contributions to the field (200-400 words)</small>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Research Timeline *</label>
                <textarea
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="Provide a realistic timeline for your research (typically 3 years for doctoral program). Break down by year and semester."
                  required
                />
                <small>Schedule for 3-year program</small>
              </div>
              <div className="form-group">
                <label htmlFor="references">Key References *</label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  placeholder="List 5-10 key academic references (papers, books) relevant to your research. Use proper citation format (APA or IEEE)."
                  required
                />
                <small>Recent and relevant academic sources (5-10 citations)</small>
              </div>
            </div>

            <div className="button-group">
              <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Reset Form
              </button>
              <button type="submit" className="btn btn-primary">
                Generate Proposal
              </button>
            </div>
          </form>
        )}

        {activeTab === 'preview' && generatedProposal && (
          <div className="output-section">
            <h2>Generated Research Proposal</h2>
            <div className="proposal-content">
              {generatedProposal}
            </div>
            <div className="button-group">
              <button className="btn btn-secondary" onClick={() => setActiveTab('form')}>
                Edit Proposal
              </button>
              <button className="btn download-btn" onClick={downloadProposal}>
                Download as Text File
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
