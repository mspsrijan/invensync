import { NewUserForm } from "@/components/forms/new-user-form";
import PageContainer from "@/components/layout/page-container";

export default function NewUser() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <NewUserForm />
      </div>
    </PageContainer>
  );
}
