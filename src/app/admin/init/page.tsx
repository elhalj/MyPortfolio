"use client";

import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";

export default function InitAdminPage() {
  const createAdmin = useMutation(api.initAdmin.createAdmin);
  const checkUsers = useMutation(api.initAdmin.checkUsersExist);
  const [status, setStatus] = useState<string>("");
  const [users, setUsers] = useState<any[]>([]);

  const handleInit = async () => {
    setStatus("Création de l'admin en cours...");
    try {
      const result = await createAdmin({
        pseudo: "wilsonDev",
        firstName: "koffi",
        lastName: "konan wilson ikeda",
        email: "wilsonikeakoffi7@gmail.com",
        password: "Wilsonoi01@",
        role: "admin",
      });
      setStatus(
        `✅ Admin créé avec succès ! ID: ${result.userId}. Vous pouvez maintenant vous connecter avec le mot de passe: Wilsonoi01@`,
      );
    } catch (error) {
      setStatus(`❌ Erreur: ${(error as Error).message}`);
      console.error(error);
    }
  };

  const handleCheckUsers = async () => {
    setStatus("Vérification des utilisateurs...");
    try {
      const result = await checkUsers();
      setUsers(result.users);
      setStatus(`✅ ${result.count} utilisateur(s) trouvé(s)`);
    } catch (error) {
      setStatus(`❌ Erreur: ${(error as Error).message}`);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Initialisation Admin
        </h1>

        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h2 className="font-semibold text-blue-800 mb-2">
              🔧 Configuration requise
            </h2>
            <ul className="list-disc list-inside text-blue-700 space-y-1">
              <li>Assurez-vous que Convex dev est en cours d'exécution</li>
              <li>Le schéma doit être déployé (convex/schema.ts)</li>
              <li>Cliquez sur "Créer Admin" une seule fois</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleInit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              Créer l'utilisateur Admin
            </button>

            <button
              onClick={handleCheckUsers}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
            >
              Vérifier les utilisateurs
            </button>
          </div>

          {status && (
            <div
              className={`p-4 rounded-lg ${
                status.includes("✅")
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : status.includes("❌")
                    ? "bg-red-50 border border-red-200 text-red-800"
                    : "bg-gray-50 border border-gray-200 text-gray-800"
              }`}
            >
              <p className="font-medium">{status}</p>
            </div>
          )}

          {users.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">
                Utilisateurs dans la base de données :
              </h3>
              <div className="space-y-2">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <p>
                      <strong>Pseudo:</strong> {user.pseudo}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Rôle:</strong> {user.role}
                    </p>
                    <p>
                      <strong>Nom complet:</strong> {user.firstName}{" "}
                      {user.lastName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
            <h3 className="font-semibold text-yellow-800 mb-2">
              📝 Identifiants de connexion
            </h3>
            <p className="text-yellow-700">
              <strong>Email:</strong> wilsonikeakoffi7@gmail.com
            </p>
            <p className="text-yellow-700">
              <strong>Mot de passe:</strong> Wilsonoi01@
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">
              🎯 Prochaines étapes
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>Créer l'admin en cliquant sur le bouton ci-dessus</li>
              <li>
                Accéder à la page de connexion:{" "}
                <a
                  href="/admin/dashboard/connexion"
                  className="text-blue-600 underline"
                >
                  /admin/dashboard/connexion
                </a>
              </li>
              <li>Se connecter avec les identifiants fournis</li>
              <li>
                Supprimer cette page d'initialisation (src/app/admin/init)
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
