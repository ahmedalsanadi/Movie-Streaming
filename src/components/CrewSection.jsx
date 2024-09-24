const CrewSection = ({ crew }) => {
    // Group crew members by department
    const groupedCrew = crew.reduce((acc, member) => {
      if (!acc[member.department]) {
        acc[member.department] = [];
      }
      acc[member.department].push(member);
      return acc;
    }, {});
  
    return (
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-8 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(groupedCrew).map(([department, members]) => (
              <div key={department} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{department}</h3>
                {members.map((member) => (
                  <div key={member.id} className="mb-2">
                    <p className="font-medium text-gray-900 dark:text-white">{member.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.job}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  export default CrewSection;