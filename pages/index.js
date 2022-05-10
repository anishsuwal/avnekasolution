

import { getAllCourses } from "content/courses/fetcher"
import { Hero } from "components/ui/common"
import { CourseCard, CourseList } from "components/ui/course"
import { BaseLayout } from "components/ui/layout"

export default function Home({ courses }) {

  return (
    <BaseLayout>
      <Hero />
      <CourseList
        courses={courses}>
        {(course) => <CourseCard
          key={course.id}
          course={course} />
        }
      </CourseList>
    </BaseLayout>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

