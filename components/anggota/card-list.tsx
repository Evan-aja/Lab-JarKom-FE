// CardList.tsx

import React, { useState } from "react";
import MemberCard from "./card";
import DropdownFilter from "./dropdown-filter";
import SearchBar from "./search-bar";
import Pagination from "./pagination";
import { Member } from "../../lib/strapi/member";

interface CardListProps {
  members: Member[];
}

const CardMemberList: React.FC<CardListProps> = ({ members }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filterValue: string) => {
    setSelectedFilter(filterValue);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearch = (searchValue: string) => {
    setSearchInput(searchValue);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Apply filter based on selected option
  const filteredMembers =
    selectedFilter === "all"
      ? members
      : members.filter((member) => {
          return (
            (selectedFilter === "students" && member.isStudent) ||
            (selectedFilter === "lecturers" && !member.isStudent)
          );
        });

  // Apply search filter based on search input
  const searchedMembers = filteredMembers.filter((member) =>
    member.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Calculate pagination indices
  const cardsPerPage = 5;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMembers = searchedMembers.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2  md:mb-0 md:mr-2">
          <DropdownFilter
            selectedOption={selectedFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="md:w-1/2">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {currentMembers.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
      <Pagination
        totalCards={searchedMembers.length}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CardMemberList;
