import os
import platform
import subprocess
import sys

def run() :
    system = platform.system() #This gets us the current operating system

    if system == "Windows":
        try:
            command_result = subprocess.run('deno task start', shell=True, check=True)
        except subprocess.CalledProcessError:
            print("Error running command (Windows). Make sure Deno is installed.")
            print("NOTE: Accepting this command will run PowerShell commands.")
            user_input = input("Would you like to run a deno installation? (y/n)")
            if user_input == 'y':
                subcommand_result = subprocess.run(["powershell", "-Command", "irm https://deno.land/install.ps1 | iex"], shell=True)
                if subcommand_result == 0:
                    os.system('deno --version')
                    sys.exit(0)
                if subcommand_result != 0:
                    print("Error running powershell script")
                    sys.exit(1)
            else:
                print("Exiting...")
            sys.exit(0)
    elif system == "Linux":
        try:
            command_result = subprocess.run('deno task start', shell=True, check=True)
            sys.exit(0)
        except subprocess.CalledProcessError:
            print("Error running command (Linux). Make sure Deno is installed.")
        sys.exit(0)
    else:
        print("Not Windows/Linux")

if __name__ == "__main__":
    run()
