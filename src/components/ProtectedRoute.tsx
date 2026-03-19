import { Navigate, useLocation } from "react-router-dom";
import { auth, type Role } from "@/lib/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: Role[];
}

export const ProtectedRoute = ({ children, requiredRoles }: ProtectedRouteProps) => {
  const location = useLocation();
  const user = auth.getUser();

  if (!auth.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRoles && !auth.hasRole(requiredRoles)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You do not have the necessary permissions (required: {requiredRoles.join(", ")}) to view this page. Current role: {user?.role}.</p>
          <a href="/" className="text-primary hover:underline">Return Home</a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
