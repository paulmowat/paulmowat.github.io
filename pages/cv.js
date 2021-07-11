import siteMetadata from '@/config/siteMetadata'
import SvgIcon from '@/components/svgs'
import { PageSeo } from '@/components/SEO'

export default function About () {
  return (
    <>
      <PageSeo
        title={`CV - ${siteMetadata.author}`}
        description={`CV - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/cv`}
      />
      <div className='divide-y'>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            CV
          </h1>
        </div>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
            <div className='col-md-3'>
              <h2>
                <span>Work</span>
              </h2>
            </div>
            <div className='col-md-9'>
              <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
                <div className='col-md-12'>
                  <h3>
                    <a href='http://www.oneadvanced.com'>Advanced</a>
                  </h3>
                  <p className='info'>
                    <span className='title'>Principal DevOps Architect</span> <span>&bull;</span>{' '}
                    <em className='date'>June 2021 - Present</em>
                    <br />
                    Key Technologies: Node.js, Javascript, AWS, Docker
                  </p>
                  <ul>
                    <li>
                      Core involvement in defining the company go forward Cloud migration strategy
                    </li>
                  </ul>
                  <p className='info'>
                    <span className='title'>ERP Architect</span> <span>&bull;</span>{' '}
                    <em className='date'>March 2018 - May 2021</em>
                    <br />
                    Key Technologies: Node.js, React, Docker, AWS, Postgres, Progress OpenEdge
                  </p>
                  <ul>
                    <li>
                      Leading projects with a team of developers in different locations to ensure
                      all functionality is delivered as specified, on time and to a high quality.
                    </li>
                    <li>
                      Mentoring and supporting teams with different skill sets and experience who
                      are located in different locations.
                    </li>
                    <li>
                      Software and database design and implementation on several different
                      technologies i.e. Node.js, React, PostgresSQL, Progress 4GL and MS SQL.
                    </li>
                    <li>
                      Assisting other teams with migration to cloud based systems i.e. on-premise to
                      cloud based on AWS.
                    </li>
                    <li>
                      Research &amp; Development on new functionality/features/technologies
                      including Voice (Alexa/Google Assistant), Chatbots, AI/ML and AR/Augmented
                      Reality
                    </li>
                    <li>
                      Part of the company software architecture team. Involved in deciding how the
                      company moves forward from a technology and architecture point of view. This
                      will impact all teams, totalling 500+ developers and 100+ applications.
                    </li>
                    <li>
                      Part of the company devops community of practice. Involved in helping increase
                      devops awareness, best practice and engagement throughout the company.
                    </li>
                  </ul>
                  <p className='info'>
                    <span className='title'>Principal Software Developer</span> <span>&bull;</span>{' '}
                    <em className='date'>November 2012 - Feburary 2018</em>
                    <br />
                    Key Technologies: Progress OpenEdge, SQL Server, C#, Java, Node.js, Angular,
                    Docker
                  </p>
                  <ul>
                    <li>
                      Assisting with specifications and coding of new modules on an award-winning
                      payroll system used to pay thousands of people around the UK. This needs to be
                      strictly compliant with HMRC rules and regulations.
                    </li>
                    <li>
                      Leading Projects with a team of 12 developers to ensure all functionality is
                      delivered as specified, on time and to a high quality. Including managing work
                      outsourced to India.
                    </li>
                    <li>
                      Mentoring graduates and other team members who are located both in-house and
                      overseas.
                    </li>
                    <li>
                      Database design and implementation on several different database technologies
                      i.e. Progress 4GL, MS SQL and PostgresSQL.
                    </li>
                    <li>
                      Lead in key technical related issues. This includes managing development,
                      build and release environments for the entire team. This was achieved using
                      technologies such as Subversion/Github, Ant, Jenkins, Octopus Deploy, Docker
                      and Amazon AWS. Including external release deployment using Installshield.
                    </li>
                    <li>
                      Helping improve and implement better overall processes i.e. Development
                      workflows and Agile development methodologies (Scrum).
                    </li>
                    <li>
                      Analysing maintenance issues and providing a quick and efficient turnaround
                      based on customer expectation. Including customer escalations as required and
                      performance tuning.
                    </li>
                    <li>
                      Research &amp; Development on new functionality/features/technologies
                      including hybrid mobile development.
                    </li>
                    <li>
                      Part of the company software architecture team consisting of 15 individuals.
                      Involved in deciding how the company moves forward from a technology, devops
                      and architecture point of view. This will impact all teams, totalling 500+
                      developers and 100+ applications.
                    </li>
                    <li>General Application and Hardware support for Development/QA team.</li>
                  </ul>
                  <p className='info'>
                    <span className='title'>Senior Developer</span> <span>&bull;</span>{' '}
                    <em className='date'>November 2010 - November 2012</em>
                    <br />
                    Key Technologies: Progress OpenEdge, SQL Server, C#, Java
                  </p>
                  <ul>
                    <li>
                      Assisting with specifications and coding new modules on a payroll system used
                      to pay hundreds of thousands of people around the UK. This needs to be
                      strictly compliant with HMRC rules and regulations.
                    </li>
                    <li>
                      Database design and implementation on a number of different database
                      technologies including Progress and MSSQL.
                    </li>
                    <li>
                      Dealing with development, build and release environments using subversion.
                      This also includes building releases with Installshield.
                    </li>
                    <li>
                      Analysing maintenance issues and providing a quick and efficient turnaround.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
                <div className='col-md-12'>
                  <h3>
                    <a href='http://www.achilles.com/'>Achilles Information Ltd (FPAL)</a>
                  </h3>
                  <p className='info'>
                    Software Engineer <span>&bull;</span>{' '}
                    <em className='date'>May 2009 - November 2010</em>
                    <br />
                    Key Technologies: C#, ASP.NET, SQL Server
                  </p>
                  <ul>
                    <li>
                      Creating specifications and coding new modules to change websites used by
                      thousands of Oil & Gas customers around the world.
                    </li>
                    <li>Tracking down and fixing faults in application and database logic. </li>
                    <li>
                      Lead developer in a number of applications, which requires a great deal of
                      workload management to ensure that everything is done within the required
                      deadlines.
                    </li>
                    <li>
                      Writing strict standards compliant code in a number of different languages to
                      match company development and quality assurance policies.
                    </li>
                    <li>
                      Part of the company standards team which is used to implement better
                      development standards and software quality processes.
                    </li>
                    <li>General Application and Hardware support.</li>
                  </ul>
                </div>
              </div>
              <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
                <div className='col-md-12'>
                  <h3>
                    <a href='http://www.trapezegroup.co.uk/'>
                      Trapeze Group (Formally Grampian Software)
                    </a>
                  </h3>
                  <p className='info'>
                    Programmer <span>&bull;</span> <em className='date'>June 2006 - May 2009</em>
                    <br />
                    Key Technologies: Progress OpenEdge
                  </p>
                  <ul>
                    <li>
                      Maintain and modify programs; make approved changes, develop detailed
                      programming logic, and perform coding changes as per specifications
                    </li>
                    <li>Create specifications based on customer’s required business logic</li>
                    <li>Creating and updating documentation to reflect application changes</li>
                    <li>Investigate, Establish and Resolve faults in application logic</li>
                    <li>Managing workload and meeting strict deadlines</li>
                    <li>Database administration and management</li>
                    <li>General application/desktop support for internal staff</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
            <div className='col-md-3'>
              <h2>
                <span>Education</span>
              </h2>
            </div>
            <div className='col-md-9'>
              <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
                <div className='col-md-12'>
                  <h3>
                    <a href='http://www.rgu.ac.uk'>Robert Gordon University</a>
                  </h3>
                  <p className='info'>
                    BSc Computing for Internet &amp; Multimedia (Hons) <span>&bull;</span>{' '}
                    <em className='date'>September 2004 - May 2006</em>
                  </p>
                  <ul>
                    <li>Systems Development</li>
                    <li>Software Project Engineering</li>
                    <li>Internet Based Programming &amp; Intranet Systems Development</li>
                    <li>Object Oriented Programming</li>
                    <li>Database Systems</li>
                    <li>Human Computer Interaction</li>
                    <li>Professional Issues</li>
                    <li>Concurrent Programming</li>
                    <li>Data Mining</li>
                    <li>Concurrent Programming</li>
                    <li>Project Management</li>
                    <li>Interactive Multimedia</li>
                  </ul>
                  <p>
                    <a
                      href='static/files/paul-mowat-amos-report.pdf'
                      className='btn sm-btn-block btn-info mb-2 mb-md-0'
                      role='button'
                      download
                    >
                      {/* <FontAwesomeIcon icon={faDownload} className='icon' /> */}
                      <SvgIcon kind='download' />
                      Honours Project - Report
                    </a>
                    <a
                      href='static/files/paul-mowat-amos-appendices.pdf'
                      className='btn sm-btn-block btn-info mb-2 mb-md-0'
                      role='button'
                      download
                    >
                      {/* <FontAwesomeIcon icon={faDownload} className='icon' /> */}
                      <SvgIcon kind='download' />
                      Honours Project - Appendices
                    </a>
                  </p>
                </div>
              </div>
              <div className='prose dark:prose-dark max-w-none xl:col-span-3'>
                <div className='col-md-12'>
                  <h3>
                    <a href='http://www.nescol.ac.uk/banffandbuchancollege'>
                      Banff and Buchan College
                    </a>
                  </h3>
                  <p className='info'>
                    HND Software Development <span>&bull;</span>{' '}
                    <em className='date'>August 2002 to May 2004</em>
                  </p>
                  <ul>
                    <li>Communication</li>
                    <li>Concurrent Programming</li>
                    <li>Introduction to Networking</li>
                    <li>Software Design and Development</li>
                    <li>Concurrent Programming</li>
                    <li>Web Programming</li>
                    <li>Computer System Fundamentals</li>
                    <li>Troubleshooting Computer Problems</li>
                    <li>Professionalism and Ethics in Computing</li>
                    <li>Data Structures</li>
                    <li>Introduction to Databases &amp; SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
