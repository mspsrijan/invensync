import PageContainer from "@/components/layout/page-container";
import { UserClient } from "@/components/tables/user-tables/client";
import { getUsers } from "@/queries/users";

export default async function UsersList() {
  const users = await getUsers();

  return (
    <PageContainer>
      <div className="space-y-2">
        <UserClient users={users} />
      </div>
    </PageContainer>
  );
}
